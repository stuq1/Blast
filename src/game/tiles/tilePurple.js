import {textures} from "../../core/texturesManager";
import {BaseColoredTile} from "./baseColoredTile";

export class TilePurple extends BaseColoredTile {

    constructor(size, gridX, gridY) {
        super(textures.ITEM_PURPLE, size, gridX, gridY);
    }

}
