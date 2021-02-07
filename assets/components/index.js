const formButton = document.querySelector('[data-form-button]');

const addTask = (event) => {
    event.preventDefault();

    const formInput = document.querySelector('[data-form-input]');
    const inputValue = formInput.value;
    
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    const content = `<p class='list_content'> ${inputValue}</p>`
    
    task.className = 'list_item';
    task.innerHTML = content

    list.appendChild(task);
}

formButton.addEventListener('click', addTask);
