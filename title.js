const scene = new THREE.Scene();

const canvas = document.getElementById("title-webgl");
const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cube_material1 = new THREE.MeshBasicMaterial({color: '#df6756'});
const cube_material2 = new THREE.MeshBasicMaterial({color: '#50a9d3'});
const cube_material3 = new THREE.MeshBasicMaterial({color: '#f1dc5d'});

let material = [cube_material1,cube_material1, cube_material3,cube_material3,cube_material2, cube_material2]
const cube = new THREE.Mesh(cubeGeometry, material);
scene.add(cube);

const sizes = {
    width:window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 5
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas:canvas,
});


renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
const clock = new THREE.Clock();
let dir = 0;
let inc = Math.PI/2;
const tick = () =>{
    let dt = clock.getDelta();
    console.log(dt)
    console.log(dir)
    if(dir == 0){
        cube.rotation.z+=inc * dt;
        cube.rotation.y+=inc * dt;
        cube.rotation.z+=inc * dt;
        if(cube.rotation.y>=Math.PI){
            dir = 1;
            cube.rotation.x = 0;
            cube.rotation.y = 0;
            cube.rotation.z = 0;
        }
    }
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick)
}

tick()