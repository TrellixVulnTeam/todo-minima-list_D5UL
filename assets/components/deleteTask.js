const ButtonDelete = () => {
    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'list_btn-delete';
    buttonDelete.innerText = 'delete';

    buttonDelete.addEventListener('click', deleteTask);

    return buttonDelete;
}

const deleteTask = (event) => {
    const taskItemTarget = event.target;
    const taskParent = taskItemTarget.parentElement;

    taskParent.remove();
};

export default ButtonDelete;

