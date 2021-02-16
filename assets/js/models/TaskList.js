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

    _deleteTaskFromList(task) {

        this._taskList = this._taskList
        .filter( (el) => el._task != task )
        
        return this._taskList;
   }
}