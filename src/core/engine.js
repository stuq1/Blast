import * as THREE from "three";

let context = {
    camera: null,
    scene: null,
    renderer: null
};
let viewController;
let geometry, material, mesh;

export function engineInit(domElementId, viewControllerClass) {
    console.log("Init");

    const canvas = document.getElementById(domElementId);

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const aspect = width/height;

    context.camera = new THREE.OrthographicCamera(-5*aspect, 5*aspect, 5, -5, 0.01, 2000);
    context.camera.position.z = 1;

    context.scene = new THREE.Scene();

    context.renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    context.renderer.setSize(width, height);
    context.renderer.setAnimationLoop(animation);

    canvas.appendChild(context.renderer.domElement);

    viewController = new viewControllerClass(context);
}

function animation(time) {
    viewController.onEvent({
        eventType: "animation"
    });
    context.renderer.render(context.scene, context.camera);
}
