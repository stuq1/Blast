import {StateMachine} from "../core/stateMachine";

import * as THREE from "three";
import {TileRed} from "./tiles/tileRed";
import {TileBlue} from "./tiles/tileBlue";

export class Board extends StateMachine {

    constructor(level) {
        super();

        this.group = new THREE.Object3D();
        this.group.position.set(-1, -1, 0);

        let segmentsX = 10;
        let segmentsY = 5;
        let sizeX = 5;
        let sizeY = 4;
        let sizeTile = 0;

        if (segmentsX > segmentsY) {
            sizeTile = sizeX/segmentsX;
        } else {
            sizeTile = sizeY/segmentsY;
        }

        this.tiles = new Array(segmentsX).fill(() => new Array(segmentsY));

        for (let i = 0; i < segmentsX; i++) {
            for (let j = 0; j < segmentsY; j++) {
                let size = sizeTile;
                let posX = i*sizeTile;
                let posY = j*sizeTile;
                let tile = new (Math.round(Math.random()*1000)%2 ? TileRed : TileBlue)(size, posX, posY);
                this.group.add(tile.mesh);
                this.tiles[i][j] = tile;
            }
        }
    }

    onEvent(event) {
        super.onEvent(event);
        switch (event.eventType) {
            case "onclick": {
                const intersects = event.data.raycaster.intersectObjects([this.group], true);
                if (intersects.length > 0) {
                    const object = intersects[0].object;
                    console.log(object);
                    this.group.remove(object);
                    /*switch (object.name) {
                        //case "mode_1_button": {
                        //    this.stateMachine.setCurrentState(this.stateMachine.boardViewState);
                        //    break;
                        //}
                    }*/
                }
                break;
            }
        }
    }

}
