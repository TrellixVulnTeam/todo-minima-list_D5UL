class TaskController {

    constructor() {

        const $ = document.querySelector.bind(document);
        this._inputForm = $('[data-form-input]');
        this._taskList = new TaskList();
    }

    _addTask(event) {

        event.preventDefault();
        const newTask = new Task(this._inputForm.value);

        this._taskList._addTaskToList(newTask);
        console.log(this._taskList.list);

        this._cleanForm();
    }

    _addNewTask() {


    }

    _cleanForm() {
        
        this._inputForm.value = '';
        this._inputForm.focus();
    }

}