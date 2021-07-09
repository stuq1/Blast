import {StateMachine} from "./stateMachine";

export class BaseViewController extends StateMachine {

    constructor(context) {
        super();
        this.context = context;
    }

}
