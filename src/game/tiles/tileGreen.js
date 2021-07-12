import {textures} from "../../core/texturesManager";
import {BaseColoredTile} from "./baseColoredTile";

export class TileGreen extends BaseColoredTile {

    constructor(size, gridX, gridY) {
        super(textures.ITEM_GREEN, size, gridX, gridY);
    }

}
