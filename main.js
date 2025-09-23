import { increment, reset } from "./counter.js";

const counter = document.querySelector('.count')
const incrementBtn = document.querySelector('.increment')
const resetBtn = document.querySelector('.reset')

function updateCount (value){
    counter.textContent = value
}

incrementBtn.addEventListener('click', (e) => {
    updateCount(increment())
})

resetBtn.addEventListener('click', (e) => {
    updateCount(reset())
})

const inputForm = document.querySelector('.part-b');
const inputElement = document.querySelector('.input');
const messageDiv = document.querySelector('.message');

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const value = inputElement.value.trim();

    if (value.length < 3) {
        messageDiv.textContent = 'Input must be at least 3 characters.';
        messageDiv.style.color = 'red';
    } else {
        messageDiv.textContent = 'Welcome!';
        messageDiv.style.color = 'green';
        inputElement.value = '';
    }
});
