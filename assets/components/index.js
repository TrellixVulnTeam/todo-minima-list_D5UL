const formButton = document.querySelector('[data-form-button]');


const createItem = () => {
    const formInput = document.querySelector('[data-form-input]');
    const inputValue = formInput.value;
    
    const list = document.querySelector('[data-list]');
    
    const taskItem = document.createElement('li');
    taskItem.className = 'list_item';
    
    const taskContent = document.createElement('p');
    taskContent.className = 'list_content';
    taskContent.innerHTML = `${inputValue}`;
    
    taskItem.appendChild(taskContent);
    list.appendChild(taskItem);
}

const addTask = (event) => {
    event.preventDefault();

    createItem()
}



formButton.addEventListener('click', addTask);
