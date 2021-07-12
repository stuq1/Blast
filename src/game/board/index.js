import {StateMachine} from "../../core/stateMachine";

import * as THREE from "three";
import {TileRed} from "../tiles/tileRed";
import {TileBlue} from "../tiles/tileBlue";
import {BoardMoveState} from "./states/boardMoveState";
import {BoardPhysicState} from "./states/boardPhysicState";
import {BoardSpawnState} from "./states/boardSpawnState";

export class Board extends StateMachine {

    constructor(level) {
        super();

        this.level = level;
        this.score = 0;
        this.movesCount = 0;

        this.group = new THREE.Object3D();
        this.group.position.set(-2, 2, 0);

        this.sizeTile = 0;

        if (this.level.width > this.level.height) {
            this.sizeTile = this.level.height/this.level.width;
        } else {
            this.sizeTile = this.level.width/this.level.height;
        }
        this.sizeTile *= 0.5;

        this.tiles = [];
        for (let x = 0; x < this.level.width; x++) {
            this.tiles.push([]);
            for (let y = 0; y < this.level.height; y++) {
                let tile = new (this.level.initSpawn(x, y))(this.sizeTile, x, y);
                this.addTile(tile);
            }
        }

        this.MOVE_STATE = this.addPossibleState(BoardMoveState);
        this.PHYSIC_STATE = this.addPossibleState(BoardPhysicState);
        this.SPAWN_STATE = this.addPossibleState(BoardSpawnState);
        this.setCurrentState(this.MOVE_STATE);
    }

    addTile(tile) {
        this.group.add(tile.mesh);
        this.tiles[tile.x][tile.y] = tile;
    }

    removeTile(tile) {
        if (!tile)
            return;

        this.group.remove(tile.mesh);
        this.tiles[tile.x][tile.y] = null;
    }

    onEvent(event) {
        super.onEvent(event);
    }

}
