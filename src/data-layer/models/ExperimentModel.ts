import uuid = require('uuid');

export class ExperimentModel {
    private _experimentId: string;
    private _expression: string;
    private _creator: string;
    private _creationTime: string;

    constructor(experimentId: string, expression: string, creator: string, creationTime: string) {
        this._experimentId = experimentId;
        this._expression = expression;
        this._creator = creator;
        this._creationTime = creationTime;
    }

    get experimentId(): string {
        return this._experimentId;
    }

    get expression(): string {
        return this._expression;
    }

    get creator(): string {
        return this._creator;
    }

    get creationTime(): string {
        return this._creationTime
    }

    getExperimentModel() {
        return Object.seal({
            _experimentId: this._experimentId,
            _expression: this._expression,
            _creator: this._creator,
            _creationTime: this._creationTime
        })
    }
}
