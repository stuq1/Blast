import * as THREE from "three";

let camera, scene, renderer;
let geometry, material, mesh;

export function engineInit(domElementId, viewControllerClass) {
    console.log("Init");

    const canvas = document.getElementById(domElementId);

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const aspect = width/height;

    camera = new THREE.OrthographicCamera(-5*aspect, 5*aspect, 5, -5, 0.01, 2000);
    camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry(1, 1, 1);

    material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0, 255, 0)
    });

    mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setAnimationLoop(animation);

    canvas.appendChild(renderer.domElement);
    const viewController = new viewControllerClass(renderer);
}

function animation(time) {
    renderer.render(scene, camera);
}