import {BaseTile} from "./baseTile";

export class BaseColoredTile extends BaseTile {

    constructor(texture, size, gridX, gridY) {
        super(texture, size, size, 1, 0.89, gridX, gridY);
    }

}
