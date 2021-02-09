import ButtonDelete from './components/deleteTask.js';
import ButtonDone from './components/doneTask.js';

const formButton = document.querySelector('[data-form-button]');
const formInput = document.querySelector('[data-form-input]');
const list = document.querySelector('[data-list]');

const addTask = (event) => {
    event.preventDefault();

    const inputValue = formInput.value;

    const taskItem = document.createElement('li');
    taskItem.className = 'list_item';

    const taskContent = document.createElement('p');
    taskContent.className = 'list_content';
    taskContent.innerHTML = `${inputValue}`;

    taskItem.appendChild(taskContent);
    taskItem.appendChild(ButtonDone());
    taskItem.appendChild(ButtonDelete());
    list.appendChild(taskItem);

    formInput.value = "";
}

formButton.addEventListener('click', addTask);



