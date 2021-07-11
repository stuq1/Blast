import {BaseViewController} from "../core/baseViewController";
import {PreloadViewState} from "./views/preloadViewState";
import {MenuViewState} from "./views/menuViewState";
import {BoardViewState} from "./views/boardViewState";

export class BlastViewController extends BaseViewController {

    constructor(renderer) {
        super(renderer);

        this.preloadViewState = this.addPossibleState(PreloadViewState);
        this.setCurrentState(this.preloadViewState);
    }

    addOthersStates() {
        this.menuViewState = this.addPossibleState(MenuViewState);
        this.boardViewState = this.addPossibleState(BoardViewState);
    }

}
