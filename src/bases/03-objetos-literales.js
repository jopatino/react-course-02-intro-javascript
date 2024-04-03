// Objetos literales


const persona = {
    nombre: 'Jose',
    apellido: 'Patiño',
    edad: 27,
    direccion: {
        ciudad: 'Paipa',
        zip: 150440,
        lat: 14.2323,
        lng: 34.123123
    }
};



// CON EM6 esto es lo mismo que lo que sigue puesto que la propiedad es la misma que el objeto
console.log( {
    persona:persona
} );

console.log({persona});

console.table(persona);

// En los navegadores se muestra por orden alfabético las propiedades de los objectos

// Al hacer esto reemplazo el espacio de memoria de persona. Esto NO se debe HACER
const persona2 = persona;
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);

// Para solucionar esto se debe hacer lo siguiente al clonar
// un objeto con el operador spread
const persona3 = { ...persona };
persona3.nombre = 'Pedro';


console.log(persona);
console.log(persona2);
console.log(persona3);