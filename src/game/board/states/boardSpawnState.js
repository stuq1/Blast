import {State} from "../../../core/stateMachine";

export class BoardSpawnState extends State {

    constructor(stateMachine) {
        super(stateMachine);
    }

    onActivate() {
        super.onActivate();

        this.timeout = 1;
        const board = this.stateMachine;

        for (let x = 0; x < board.level.width; x++) {
            for (let y = 0; y < board.level.height; y++) {
                if (!board.tiles[x][y]) {
                    board.addTile(new (board.level.nextTile(x, y))(board.sizeTile, x, y));
                }
            }
        }
    }

    onDeactivate() {
        super.onDeactivate();
    }

    onEvent(event) {
        super.onEvent(event);

        this.timeout -= 1;
        if (this.timeout == 0) {
            this.stateMachine.setCurrentState(this.stateMachine.MOVE_STATE);
        }
    }

}
