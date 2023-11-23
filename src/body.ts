export default function createBody() {
    let body = document.querySelector('body');
    body?.classList.add('bg-fixed', 'bg-cover', 'bg-no-repeat');
    body?.setAttribute('style', 'background-image: url(/img/pexels-simon-berger-1183099.jpg)');

    let h1 = document.createElement('h1');
    h1.textContent = 'Weather Forecast';
    h1.classList.add('text-center', 'text-6xl', 'text-white','mt-20','mb-10');
    body?.appendChild(h1);

    let div = document.createElement('div');
    div.classList.add('flex', 'justify-center');
    body?.appendChild(div);

    let input = document.createElement('input');
    input.type = 'search';
    input.setAttribute('id', 'search');
    input.classList.add('my-10', 'py-2', 'w-1/4', 'text-sm', 'text-white', 'bg-inherit', 'rounded-md', 'pl-10','hover:bg-slate-800', 'focus:bg-slate-800');
    input.placeholder = 'Search for a city...';
    div?.appendChild(input);

    let button = document.createElement('button');
    button.classList.add('my-10', 'py-2', 'px-4', 'text-sm', 'text-white', 'bg-inherit', 'rounded-md');
    div?.appendChild(button);

    let span = document.createElement('span');
    span.textContent = 'search';
    span.classList.add('material-symbols-outlined');
    button?.appendChild(span);
}