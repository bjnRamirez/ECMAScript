// Enhanced  object literals

function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        uId,
    }
}

console.log(newUser('gndx', 24, 'PE', 1));

/* Los objetos literales consiste en crear objetos a partir de variables sin repetir el nombre. Antes de ES6, para crear un objeto a partir de variables consistía en la siguiente manera: */
const nombre = "Andres"
const edad = 23

const objeto = {
    nombre: nombre,
    edad: edad
}

objeto // { nombre: 'Andres', edad: 23 }

/* Cómo utilizar objetos literales
Con los parámetros de objeto puedes obviar la repetición de nombres, JavaScript creará la propiedad a partir del nombre de la variable con su respectivo valor. */

const nombre2 = "Andres"
const edad2 = 23

const objeto2 = {
    nombre,
    edad
}

objeto // { nombre: 'Andres', edad: 23 }

/* El resultado es el mismo, pero sin la necesidad de repetir palabras. Puedes combinarlo con variables que su propiedad tiene un nombre diferente. */

const nombre3 = "Andres"
const edad3 = 23
const esteEsUnID = 1

const objeto3 = {
    nombre,
    edad,
    id: esteEsUnID
}

objeto // { nombre: 'Andres', edad: 23, id: 1 }