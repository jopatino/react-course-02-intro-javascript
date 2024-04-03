// Desestructuración de arreglos

const personajes = ['Goku', 'Vegueta', 'Trunks'];
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();

console.log(letras, numeros);


// Tarea
// El primer valor del arr se llamará nombre
// se llamará setNombre

const useState = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}];
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();