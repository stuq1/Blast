import {BaseTile} from "./baseTile";
import {textures} from "../../core/texturesManager";

export class TileRed extends BaseTile {

    constructor(size, gridX, gridY) {
        super(textures.ITEM_RED, size, size, 1, 0.89, gridX, gridY);
    }

}