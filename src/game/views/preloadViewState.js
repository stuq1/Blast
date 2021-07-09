import {State} from "../../core/stateMachine";
import {preloadTextures, textures} from "../../core/texturesManager";

export class PreloadViewState extends State {

    constructor(stateMachine) {
        super(stateMachine);
    }

    onActivate () {
        console.log("Preload view activated");

        preloadTextures(textures).then(() => {
            this.stateMachine.setCurrentState(this.stateMachine.menuViewState);
        }).catch((e) => {
            console.log(e);
        });
    }

    onDeactivate () {
        console.log("Preload view deactivated");
    }

    onEvent (event) {

    }

}
