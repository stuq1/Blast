import {StateMachine} from "./stateMachine";

export class BaseViewController extends StateMachine {

    constructor(renderer) {
        super();
        this.renderer = renderer;
    }

}
