import {BaseViewController} from "../core/baseViewController";
import {PreloadViewState} from "./views/preloadViewState";
import {MenuViewState} from "./views/menuViewState";

export class BlastViewController extends BaseViewController {

    constructor(renderer) {
        super(renderer);

        this.preloadViewState = this.addPossibleState(PreloadViewState);
        this.menuViewState = this.addPossibleState(MenuViewState);
        this.setCurrentState(this.preloadViewState);
    }

}
