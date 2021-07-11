import {State} from "../../core/stateMachine";
import * as THREE from "three";
import {getTexture, textures} from "../../core/texturesManager";

export class MenuViewState extends State {

    constructor(stateMachine) {
        super(stateMachine);

        this.group = new THREE.Group();
        this.stateMachine.context.renderer.setClearColor(0xA2A2A2);

        this.clickableGroup = new THREE.Group();

        let mode_1_geometry = new THREE.PlaneGeometry(3, 1, 1, 1);
        let mode_1_material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(1.0, 1.0, 1.0),
            transparent: true,
            map: getTexture(textures.MODE_1_BUTTON)
        });
        let mode_1_mesh = new THREE.Mesh(mode_1_geometry, mode_1_material);
        mode_1_mesh.position.y = 1;
        mode_1_mesh.name = "mode_1_button";
        this.clickableGroup.add(mode_1_mesh);

        let mode_2_geometry = new THREE.PlaneGeometry(3, 1, 1, 1);
        let mode_2_material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(1.0, 1.0, 1.0),
            transparent: true,
            map: getTexture(textures.MODE_2_BUTTON)
        });
        let mode_2_mesh = new THREE.Mesh(mode_2_geometry, mode_2_material);
        mode_2_mesh.position.y = -1;
        mode_2_mesh.name = "mode_2_button";
        this.clickableGroup.add(mode_2_mesh);

        this.group.add(this.clickableGroup);
    }

    onActivate () {
        console.log("Main menu view activated");

        this.stateMachine.context.scene.add(this.group);
    }

    onDeactivate () {
        this.stateMachine.context.scene.remove(this.group);
        console.log("Main menu view deactivated");
    }

    onEvent (event) {
        switch (event.eventType) {
            case "onclick": {
                const intersects = event.data.raycaster.intersectObjects([this.group], true);
                if (intersects.length > 0) {
                    const object = intersects[0].object;
                    switch (object.name) {
                        case "mode_1_button": {
                            this.stateMachine.setCurrentState(this.stateMachine.boardViewState);
                            break;
                        }
                    }
                }
                break;
            }
        }
    }

}
