import './style.css';
import createBody from './body';
import createForm from './weather';

document.addEventListener('DOMContentLoaded', () => {
    createBody();
    let button = document.getElementById('submit');
    button?.addEventListener('click', () => {
        createForm();
    })
})
