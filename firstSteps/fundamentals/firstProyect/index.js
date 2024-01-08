import { createAndInsertElement } from "./createElementsHTML.js";

const elementsDOM = { //Ordenamos los IDs de los elementos HTML
    divRoot: '#app',
}

//Seleccionamos el div que es el punto de entrada de nuestra aplicación
const root = document.querySelector( elementsDOM.divRoot );
const imagesIDx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Cantidad de images disponibles
let count = 0; //Contador

const h1 = createAndInsertElement('h1', null, null, '¡Hello world!', root, 1);
//Imagen inicial de la aplicación cuando se entra por primera vez
const img = createAndInsertElement('img', ['src'], ['images/1.jpg'], null, root, 1);
const div = createAndInsertElement('div', null, null, null, root, 1);
const firstBtn = createAndInsertElement('button', null, null, '-', div, 1);
let textIdx = createAndInsertElement('p', null, null, '1', div, 1);
const secondBtn = createAndInsertElement('button', null, null, '+', div, 1);
const changeNameBtn = createAndInsertElement('button', ['class'], ['button-changeName'], 'Agregar nuevo nombre de usuario', root, 1);

const prevImage = () => {
    if( count <= 0 ) return;
    count--;
    localStorage.setItem('countStored', count);

    img.src = `images/${imagesIDx[count]}.jpg`;
    textIdx.innerText = `${count + 1}`;
}

const nextImage = () => {
    count++;
    localStorage.setItem('countStored', count);

    if(count >= imagesIDx.length) {
        count = 0;

        img.src = `images/${imagesIDx[count]}.jpg`;
        textIdx.innerText = '1';
    };

    img.src = `images/${imagesIDx[count]}.jpg`;
    textIdx.innerText = `${count + 1}`;
}

const changeNameUser = () => {
    const newName = prompt('Por favor, ingresa tu nombre.');
    if( !newName ) changeNameUser();

    localStorage.setItem('nameUser', newName); //Nos permite almacenar datos en el navegador y recuperarlos luego
    h1.innerText = `Te damos la bienvenida ${ newName }`;
}

if(!localStorage.getItem('nameUser')) {
    changeNameUser();
} else {
    let nameStored = localStorage.getItem('nameUser');
    h1.innerText = `Te damos la bienvenida ${ nameStored }`;

    if(localStorage.getItem('countStored')) {
        count = parseInt(localStorage.getItem('countStored'));

        img.src = `images/${imagesIDx[count]}.jpg`;
        textIdx.innerText = `${count + 1}`;
    }
}

firstBtn.addEventListener('click', () => prevImage());
secondBtn.addEventListener('click', () => nextImage());
changeNameBtn.addEventListener('click', () => changeNameUser());