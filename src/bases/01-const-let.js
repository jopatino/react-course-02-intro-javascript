console.log('Hola mundo');

// Variables y constantes

const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

//var No se debe usar
if (true){
    // Valor dado = 6 sólo existe dentro del scope del if
    const nombre = 'Peter';
    let valorDado = 6;
    console.log(valorDado);
}

console.log(valorDado);