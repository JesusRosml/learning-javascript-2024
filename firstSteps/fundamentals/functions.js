/* 
    Las funciones son una manera de encapsular una funcionalidad que quieres reutilizar, de manera que puedes 
    llamar esa función con un solo nombre, y no tendrás que escribir el código entero cada vez que la utilices.

    Las funciones con frecuencia toman argumentos —pedazos de datos que necesitan para hacer su trabajo—.

    la sentencia returnle dice al navegador que devuelva la variable resultadofuera de la función, para que esté 
    disponible para su uso.
*/

const operationRest = ( firstNum, secondNum ) => firstNum - secondNum;

function operationMult( firstNum, secondNum ) {
    const result = firstNum * secondNum;
    
    return result;
}

operationRest( 23, 90 ); 