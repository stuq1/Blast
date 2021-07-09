import {State} from "../../core/stateMachine";

export class MenuViewState extends State {

    constructor(stateMachine) {
        super(stateMachine);
    }

    onActivate () {
        console.log("Main menu view activated");
    }

    onDeactivate () {
        console.log("Main menu view deactivated");
    }

    onEvent (event) {

    }

}
