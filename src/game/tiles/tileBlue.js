import {BaseTile} from "./baseTile";
import {textures} from "../../core/texturesManager";

export class TileBlue extends BaseTile {

    constructor(size, gridX, gridY) {
        super(textures.ITEM_BLUE, size, size, 1, 0.89, gridX, gridY);
    }

}
