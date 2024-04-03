// Desestructuración de objetos
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { edad, clave, nombre, } = persona;

console.log(nombre)
console.log(edad)
console.log(clave)


const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 13.232,
            lng: -12.2323
        }
    }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng)