/* Cómo transformar un array de arrays en un objeto
El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor].
 */
const entries = new Map([["name", "benjamin"], ["age", 24]]);
console.log(entries)
console.log(Object.fromEntries(entries));


const arrayEntries = [
    [ 'name', 'Andres' ],
    [ 'email', 'andres@correo.com' ],
    [ 'age', 23 ]
]

const usuario = Object.fromEntries(arrayEntries)

console.log(usuario)
/* {
    name: 'Andres',
    email: 'andres@correo.com',
    age: 23
    }
  */