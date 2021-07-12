import {textures} from "../../core/texturesManager";
import {BaseColoredTile} from "./baseColoredTile";

export class TileBlue extends BaseColoredTile {

    constructor(size, gridX, gridY) {
        super(textures.ITEM_BLUE, size, gridX, gridY);
    }

}
