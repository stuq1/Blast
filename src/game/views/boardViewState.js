import {State} from "../../core/stateMachine";
import * as THREE from "three";
import {getTexture, textures} from "../../core/texturesManager";
import {Board} from "../board";

export class BoardViewState extends State {

    constructor(stateMachine) {
        super(stateMachine);

        this.group = new THREE.Object3D();

        let progress_panel_geometry = new THREE.PlaneGeometry(6, 1, 1, 1);
        let progress_panel_material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(1.0, 1.0, 1.0),
            transparent: true,
            map: getTexture(textures.PROGRESS_PANEL)
        });
        let progress_panel_mesh = new THREE.Mesh(progress_panel_geometry, progress_panel_material);
        progress_panel_mesh.position.y = 4.5;
        progress_panel_mesh.name = "mode_1_button";
        this.group.add(progress_panel_mesh);
    }

    onActivate () {
        console.log("Main menu view activated");
        this.board = new Board();
        this.group.add(this.board.group);

        this.stateMachine.context.scene.add(this.group);
    }

    onDeactivate () {
        this.stateMachine.context.scene.remove(this.group);
        console.log("Main menu view deactivated");
    }

    onEvent (event) {
        this.board.onEvent(event);
        /*switch (event.eventType) {
            case "onclick": {
                const intersects = event.data.raycaster.intersectObjects([this.group], true);
                if (intersects.length > 0) {
                    const object = intersects[0].object;
                    switch (object.name) {
                        //case "mode_1_button": {
                        //    this.stateMachine.setCurrentState(this.stateMachine.boardViewState);
                        //    break;
                        //}
                    }
                }
                break;
            }
        }*/

    }

}
