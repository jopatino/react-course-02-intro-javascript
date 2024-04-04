const activo = true;


let message = '';

if (!activo) {
    message = 'Activo'
} else {
    message = 'Inactivo'
}

// const mensaje = ( activo ) ? 'Activo': 'Inactivo';
// const mensaje = ( activo ) ? 'Activo': null;
const mensaje = activo && 'Activo';

console.log(mensaje);