const validationArguments = ( label, attribute, valueAttribute, parent, amount ) => {
    if( typeof label !== 'string' || label.length === 0 ) throw new Error('La etiqueta debe ser una cadena que no esté vacía');

    if( !( parent instanceof Node ) ) throw new Error('El padre debe ser un nodo');

    if( typeof amount !== 'number' || amount <= 0) throw new Error('La cantidad debe ser un número mayor que 0');

    if( Array.isArray( attribute ) && Array.isArray( valueAttribute ) && attribute.length !== valueAttribute.length) {
        throw new Error('attribute y valueAttribute deben ser matrices de la misma longitud');
    }
}

export const createAndInsertElement = ( label, attribute, valueAttribute, content, parent, amount ) => {
    validationArguments(label, attribute, valueAttribute, parent, amount);

    let labelHTML;

    for( let i = 0; i < amount; i++ ) {
        labelHTML = document.createElement(label);

        if( content ) labelHTML.textContent = content;
        
        if( Array.isArray( attribute ) && Array.isArray( valueAttribute ) ) {
            for(let j = 0; j < attribute.length; j++) {
                labelHTML.setAttribute(attribute[j], valueAttribute[j]);
            }
        }

        parent.append( labelHTML );
    }

    return labelHTML;
};