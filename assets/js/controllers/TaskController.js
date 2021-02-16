class TaskController {

	constructor() {

		const $ = document.querySelector.bind(document);
		this._inputForm = $('[data-form-input]');
	
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

	_deleteTask(event) {

		const task = event.target
			.parentNode
			.parentNode
			.querySelector('.task_text')
			.innerHTML

		this._taskList._deleteTaskFromList(task);
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