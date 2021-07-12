import {textures} from "../../core/texturesManager";
import {BaseColoredTile} from "./baseColoredTile";

export class TileRed extends BaseColoredTile {

    constructor(size, gridX, gridY) {
        super(textures.ITEM_RED, size, gridX, gridY);
    }

}
