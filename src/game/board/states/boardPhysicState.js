import {State} from "../../../core/stateMachine";

export class BoardPhysicState extends State {

    constructor(stateMachine) {
        super(stateMachine);
    }

    onActivate() {
        super.onActivate();

        this.timeout = 30;
        const board = this.stateMachine;

        for (let x = 0; x < board.level.width; x++) {
            for (let y = board.level.height - 1; y >= 0; y--) {
                if (board.tiles[x][y])
                    continue;

                for (let y_offset = 1; y - y_offset >= 0; y_offset++) {
                    let _y = y - y_offset;

                    if (!board.tiles[x][_y])
                        continue;

                    board.tiles[x][_y].setGridPos(x, y);
                    board.tiles[x][y] = board.tiles[x][_y];
                    board.tiles[x][_y] = null;
                    break;
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
            this.stateMachine.setCurrentState(this.stateMachine.SPAWN_STATE);
        }
    }

}
