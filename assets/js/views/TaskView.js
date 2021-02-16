class TaskView {

	constructor(element) {

		this._element = element;
	}

	_template(model) {

		return `
			<ul class="tasks_list" data-list>
				${model.list.map( el => `
					<li class="task">
						<p class="task_text">${el.task}</p>
						<div class="task_buttons">
							<button class="task_button--done task_button data-button-done"> done </button>
							<button class="task_button--delete task_button data-button-delete"> delete </button>
						</div>
					</li>
				`).join('')}
			</ul>
    `
	}

	update(model) {

		this._element.innerHTML = this._template(model);
	}
}