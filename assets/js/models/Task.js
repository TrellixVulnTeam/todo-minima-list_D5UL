class Task {

    constructor(task) {

        this._task = task;
        Object.freeze(this);
    }

    get task() {
        
        return this._task;
    }
}