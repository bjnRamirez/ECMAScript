/* Obtener los valores de un objeto en un array
Object.values() devuelve un array con los valores de cada propiedad del objeto enviado como argumento. */
const countries = {
    MX: 'Mexico',
    CO: 'Colombia',
    CH: 'Chile',
    PE: 'Peru'
};
console.log(Object.values(countries))