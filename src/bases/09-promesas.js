import {getHeroeById} from "./bases/08-importacion-exportacion";

const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        const p1 = getHeroeById(2);
        resolve(p1)
        // reject('Nose pudo encontrar el héroe')
    }, 2000)

})

promesa.then((heroe) => {
    console.log('heroe', heroe);
})
    .catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroeById((id));
            if (p1) {
                resolve(p1)
            } else {
                reject('No se pudo encontrar el héroe')
            }
        }, 2000)

    })

}

getHeroeByIdAsync(22).then(console.log).catch(console.warn)