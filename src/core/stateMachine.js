export class State {

    constructor (stateMachine) {
        this.stateMachine = stateMachine;
    }

    onActivate () {

    }

    onDeactivate () {

    }

    onEvent (event) {

    }

}

export class StateMachine {

    constructor () {
        this._possibleStates = [];
        this._idCurrentState = -1;
    }

    addPossibleState (possibleStateClass) {
        const id = this._possibleStates.length;
        this._possibleStates.push(new possibleStateClass(this));
        return id;
    }

    setCurrentState (idNewState) {
        if (this._idCurrentState !== -1) {
            this._possibleStates[this._idCurrentState].onDeactivate();
        }
        this._idCurrentState = idNewState;
        this._possibleStates[this._idCurrentState].onActivate();
    }

    getCurrentStateId () {
        return this._idCurrentState;
    }

    getCurrentState () {
        return this._possibleStates[this._idCurrentState];
    }

    onEvent (event) {
        if (this._idCurrentState !== -1) {
            this._possibleStates[this._idCurrentState].onEvent(event);
        }
    }

}
