const ButtonDone = () => {
    const buttonDone = document.createElement('button');
    buttonDone.className = 'list_btn-done';
    buttonDone.innerText = 'done';

    buttonDone.addEventListener('click', doneTask);

    return buttonDone;
}

const doneTask = (event) => {
    const taskItemTarget = event.target;
    const taskParent = taskItemTarget.parentElement;

    taskParent.classList.toggle('done')
}

export default ButtonDone;
