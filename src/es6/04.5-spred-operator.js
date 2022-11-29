/* El operador de propagación (spread operator), como su nombre lo dice, consiste en propagar los elementos de un iterable, ya sea un array o string utilizando tres puntos (...) dentro de un array. */

// Para strings
const array = [ ..."Hola"]    // [ 'H', 'o', 'l', 'a' ]

// En arrays
const otherArray = [ ...array]   //[ 'H', 'o', 'l', 'a' ]


let person = {name: 'oscar', age: 28}
let country = 'MX';

let data = { id: 1, ... person, country}

console.log(data) //{ id: 1, name: 'oscar', age: 28, country: 'MX' }

// res params
/* El parámetro rest consiste en agrupar el residuo de elementos mediante la sintaxis de tres puntos (...) seguido de una variable que contendrá los elementos en un array.

Esta característica sirve para crear funciones que acepten cualquier número de argumentos para agruparlos en un array. */
function hola (primero, segundo, ...resto) {
    console.log(primero, segundo)  // 1 2
    console.log(resto) // [3,4,5,6]
}

hola(1,2,3,4,5,6)

function sum(num, ...values){
    console.log(values); //[ 1, 2, 3 ]
    console.log(num + values[0]); // 2
    return num + values[0];
}

sum(1, 1, 2, 3)

/* También sirve para obtener los elementos restantes de un array u objeto usando desestructuración. */

const objeto = {
    nombre: "Andres",
    age: 23,
    plataforma: "Platzi"
}
const arr = [0,1,2,3,4,5]

const {plataforma, ...usuario} = objeto
const [cero, ...positivos] = arr

usuario // { nombre: 'Andres', age: 23 }
positivos // [ 1, 2, 3, 4, 5 ]

/* Posición del parámetro rest
El parámetro rest siempre deberá estar en la última posición de los parámetros de la función, caso contrario existirá un error de sintaxis. */
// ❌ Mal
// function hola (primero, ...rest, ultimo) { ... }
// SyntaxError: Rest element must be last element.

/* Diferencias entre el parámetro rest y el operador de propagación*/
/* Aunque el parámetro rest y el operador de propagación utilicen la misma sintaxis, son diferentes.

El parámetro rest agrupa el residuo de elementos y siempre debe estar en la última posición, mientras que el operador de propagación expande los elementos de un iterable en un array y no importa en que lugar esté situado. */

const arrays = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5, "final"]
}

hola(...arrays, "final") //<- Operador de propagación
//Lo mismo que hacer -> hola(1,2,3,4,5, "final")