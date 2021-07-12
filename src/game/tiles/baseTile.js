import * as THREE from "three";
import {getTexture} from "../../core/texturesManager";

export class BaseTile {

    constructor(texture, sizeX, sizeY, geometrySizeX, geometrySizeY, gridX, gridY) {
        this.x = gridX;
        this.y = gridY;

        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.geometrySizeX = geometrySizeX;
        this.geometrySizeY = geometrySizeY;

        let geometry = new THREE.PlaneGeometry(sizeX/geometrySizeX, sizeY/geometrySizeY, 1, 1);
        let material = new THREE.MeshBasicMaterial({
            map: getTexture(texture),
            transparent: true
        });
        let _posX = gridX*sizeX;
        let _posY = gridY*sizeY;

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.set(_posX, -_posY, (_posY+5)*-2);
        this.mesh.userData = this;
    }

    setGridPos(gridX, gridY) {
        this.x = gridX;
        this.y = gridY;

        let _posX = gridX*this.sizeX;
        let _posY = gridY*this.sizeY;
        this.mesh.position.set(_posX, -_posY, (_posY+5)*-2);
    }

    move(gridX, gridY) {
        this.x = gridX;
        this.y = gridY;
    }

    onRender(data) {

    }

    onSpawn(data) {

    }

    onDestroy(data) {

    }

}
