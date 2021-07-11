import {BaseTile} from "../baseTile";
import {textures} from "../../core/texturesManager";

export class TileRed extends BaseTile {

    constructor(size, posX, posY) {
        super(textures.ITEM_RED, size, size/0.9, posX, posY);
    }

}