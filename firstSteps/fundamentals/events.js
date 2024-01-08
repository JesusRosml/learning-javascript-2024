/* 
    Para crear una interacción real en tu sitio web, debes usar eventos. Estos son unas estructuras de código que 
    captan lo que sucede en el navegador, y permite que en respuesta a las acciones que suceden se ejecute un 
    código.
*/

document.querySelector('html').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}