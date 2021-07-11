import * as THREE from "three";
import {getTexture} from "../core/texturesManager";

export class BaseTile {

    constructor(texture, sizeX, sizeY, posX, posY) {
        let geometry = new THREE.PlaneGeometry(sizeX, sizeY, 1, 1);
        let material = new THREE.MeshBasicMaterial({
            map: getTexture(texture),
            transparent: true
        });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.set(posX, posY, (posY+5)*2);
    }

    onRender(data) {

    }

    onSpawn(data) {

    }

    onDestroy(data) {

    }

}
