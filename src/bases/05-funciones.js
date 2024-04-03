//Funciones en javascript

const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola ${nombre}`;

const saludar4 = () => 'Hola mundo';

console.log(saludar2('Jose'));
console.log(saludar3('Diana'));
console.log(saludar4());


const getUser = () => ({
    uid: 'ABC123',
    username: 'joseopatinoc'
});

const user = getUser();

//Tarea
const getUsuarioActivo = (nombre) => ({
    uid: 'BCD456',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Jose')
console.log(usuarioActivo);