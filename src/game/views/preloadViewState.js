import {State} from "../../core/stateMachine";
import {preloadTextures, textures} from "../../core/texturesManager";
import * as THREE from "three";

export class PreloadViewState extends State {

    constructor(stateMachine) {
        super(stateMachine);

        this.group = new THREE.Group();

        let geometry = new THREE.BoxGeometry(1, 1, 1);
        let material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0, 255, 0)
        });
        this.mesh = new THREE.Mesh(geometry, material);

        this.group.add(this.mesh);
    }

    onActivate () {
        console.log("Preload view activated");
        this.stateMachine.context.scene.add(this.group);
        this.mesh.rotation.z = 0;

        preloadTextures(textures).then(() => {
            this.stateMachine.addOthersStates();
            this.stateMachine.setCurrentState(this.stateMachine.menuViewState);
        }).catch((e) => {
            console.log(e);
        });
    }

    onDeactivate () {
        this.stateMachine.context.scene.remove(this.group);
        console.log("Preload view deactivated");
    }

    onEvent (event) {
        switch (event.eventType) {
            case "animation": {
                this.mesh.rotation.z += 0.025;
            }
        }
    }

}
