import {State} from "../../../core/stateMachine";

export class BoardMoveState extends State {

    constructor(stateMachine) {
        super(stateMachine);
    }

    onActivate() {
        super.onActivate();
    }

    onDeactivate() {
        super.onDeactivate();
    }

    onEvent(event) {
        super.onEvent(event);

        const board = this.stateMachine;

        switch (event.eventType) {
            case "onclick": {
                const intersects = event.data.raycaster.intersectObjects([board.group], true);
                if (intersects.length > 0) {
                    const tile = intersects[0].object.userData
                    board.removeTile(tile);
                    board.setCurrentState(this.stateMachine.PHYSIC_STATE);
                }
                break;
            }
        }
    }

}
