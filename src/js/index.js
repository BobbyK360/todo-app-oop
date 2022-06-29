import '../scss/index.scss';
import testText from './partials/test';

testText();

//Really basic code to refresh myself on how to make a modal appear. Will not be in final OOP version.

const addBtn = document.querySelector('.add-btn > .fa-square-plus');
const todoModal = document.querySelector('.todo-modal');

addBtn.addEventListener('click', () => {
    console.log('clicked');
    todoModal.classList.toggle('modal-appear');
});
