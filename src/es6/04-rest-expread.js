/*La desestructuración (destructuring) consiste en extraer los valores de arrays o propiedades de objetos en distintas variables.  */

// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);


// Object desctructuring

let user = {username: 'Benjamin', agge: 24};
let {username, agge} = user;
console.log(username, user.agge)

/* ***********************************  */
/* Antes de ES6, necesitabas acceder al objeto con la notación punto o corchetes por cada propiedad que se necesita y asignar ese valor a una variable diferente. */
var usuario = { nombre: "benjamin", edad: 24, plataforma: "Platzi" }

var nombre = usuario.nombre
var edad = usuario.edad
var plataforma = usuario["plataforma"]

console.log(nombre)  // 'benjamin'
console.log(edad)  // 24
console.log(plataforma)  // 'Platzi'

/* Con la desestructuración puedes realizar lo mismo, pero en una sola línea, provocando que el código seas más legible y mantenible. */
var usuario = { nombre: "benjamin", edad: 24, plataforma: "Platzi" }
let {nombre, edad, plataforma} = usuario
console.log(nombre)
console.log(edad)
console.log(plataforma)


/* ***********************************  */
/* Cambiar el nombre de las variables con desestructuración
Si no te agrada el nombre de la propiedad del objeto, puedes cambiarlo utilizando la siguiente sintaxis: */
const objeto = { prop1: "valor1", prop2: "valor2"}

// Desestructuración
const { prop1: newProp1, prop2: newProp2 } = objeto

/* Por ejemplo: */
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre: name, edad: age, plataforma: platform } = usuario

console.log(name)  // 'Andres'
console.log(age)  // 23
console.log(platform)  // 'Platzi'

console.log(nombre)   // Uncaught ReferenceError: nombre is not defined