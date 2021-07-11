import * as THREE from "three";

let context = {
    camera: null,
    scene: null,
    renderer: null
};
let viewController;
let raycaster;
let mouse = new THREE.Vector2();

export function engineInit(domElementId, viewControllerClass) {
    console.log("Init");

    const canvas = document.getElementById(domElementId);

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const aspect = width/height;

    context.camera = new THREE.OrthographicCamera(-5*aspect, 5*aspect, 5, -5, 0.01, 2000);
    context.camera.position.z = 1000;

    context.scene = new THREE.Scene();

    context.renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    context.renderer.setSize(width, height);
    context.renderer.setAnimationLoop(animation);

    raycaster = new THREE.Raycaster();

    canvas.onclick = (event) => {
        mouse.x =  (event.offsetX / width) * 2 - 1;
        mouse.y = -(event.offsetY / height)* 2 + 1;

        raycaster.setFromCamera(mouse, context.camera);
        const intersects = raycaster.intersectObjects([context.scene], true);
        if (intersects.length > 0) {
            const object = intersects[0].object;
            console.log(object);
        }
    }

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
