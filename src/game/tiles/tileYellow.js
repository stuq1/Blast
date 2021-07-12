import {textures} from "../../core/texturesManager";
import {BaseColoredTile} from "./baseColoredTile";

export class TileYellow extends BaseColoredTile {

    constructor(size, gridX, gridY) {
        super(textures.ITEM_YELLOW, size, gridX, gridY);
    }

}
