import {BaseTile} from "../baseTile";
import {textures} from "../../core/texturesManager";

export class TileBlue extends BaseTile {

    constructor(size, posX, posY) {
        super(textures.ITEM_BLUE, size, size/0.9, posX, posY);
    }

}
