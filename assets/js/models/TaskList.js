class TaskList {

    constructor() {

        this._taskList = [];
    }

    _addTaskToList(task) {

        return this._taskList.push(task);
    }

    get list() {

        return [].concat(this._taskList);
    }



}