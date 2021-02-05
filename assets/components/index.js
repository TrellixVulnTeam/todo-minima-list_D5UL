const addTask = (event) => {
    event.preventDefault()
    const inputForm = document.querySelector('[data-form-input')
    const inputValue = inputForm.value
    console.log(inputValue)
}

const btnForm = document.querySelector('[data-form-button]')

btnForm.addEventListener('click', addTask)