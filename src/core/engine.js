import * as THREE from "three";

let context = {
    camera: null,
    scene: null,
    renderer: null
};
let raycaster;
let width, height, aspect;
let viewController;

function onClick(event) {
    const mouse = new THREE.Vector2();
    mouse.x =  (event.offsetX / width) * 2 - 1;
    mouse.y = -(event.offsetY / height)* 2 + 1;

    raycaster.setFromCamera(mouse, context.camera);
    viewController.onEvent({
        eventType: "onclick",
        data: {
            raycaster
        }
    });
}

export function engineInit(domElementId, viewControllerClass) {
    console.log("Init");

    const canvas = document.getElementById(domElementId);

    width = canvas.clientWidth;
    height = canvas.clientHeight;
    aspect = width/height;

    context.camera = new THREE.OrthographicCamera(-5*aspect, 5*aspect, 5, -5, 0.01, 2000);
    context.camera.position.z = 1000;

    context.scene = new THREE.Scene();

    context.renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    context.renderer.setSize(width, height);
    context.renderer.setAnimationLoop(animation);

    raycaster = new THREE.Raycaster();

    canvas.onclick = onClick;

    canvas.appendChild(context.renderer.domElement);

    viewController = new viewControllerClass(context);
}

function animation(time) {
    viewController.onEvent({
        eventType: "animation",
        data: {
            time
        }
    });
    context.renderer.render(context.scene, context.camera);
}
