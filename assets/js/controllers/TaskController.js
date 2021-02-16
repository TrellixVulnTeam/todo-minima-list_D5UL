class TaskController {

    constructor() {

        const $ = document.querySelector.bind(document);

        this._inputForm = $('[data-form-input]');
        this._buttonDone = $('[data-button-done]');
        this._buttonDelete = $('[data-button-delete]');

        this._taskList = new TaskList();
        this._taskView = new TaskView($('[data-tasks]'));
        this._taskView.update(this._taskList);
    }

    _addTask(event) {

        event.preventDefault();
        this._addNewTask();
        this._updateView();
        this._cleanForm();
    }

    _addNewTask() {

        const newTask = new Task(this._inputForm.value);
        return this._taskList._addTaskToList(newTask);
    }

    _updateView() {

        return this._taskView.update(this._taskList);
    }

    _cleanForm() {

        this._inputForm.value = '';
        this._inputForm.focus();
    }

}