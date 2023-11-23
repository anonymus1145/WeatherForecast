import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    let app = document.getElementById('app');

    let h1 = document.createElement('h1');
    h1.textContent = 'Hello World!';
    h1.className = 'text-xl';

    app?.appendChild(h1);
})