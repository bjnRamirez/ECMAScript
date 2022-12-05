/* Nosotros podemos tener nuestro objeto que dentro que dentro puede tener la representacion de llave-valor y esa llave valor puede ser tambien otro objeto y cuando queremos acceder a ese elemento podemos tener errores*/
// Esta caracteristica nos puede ayudar bastante con framework y librerias a poder validar que la informacion este presente y no rompa el aplicativo.

//optional-chaining = sigo de pregunta sobre la cadena consecuente, y garantizar que me podra otorgar el valor undefined y que de alguna manera como funciona este framework o libreria, me va actualizar el valor sin ningun inconveniente y el flujo va a funcionar como debe de ser.
const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}
console.log(users?.bebeloper?.country);

/*
No abuses del encadenamiento opcional
🔗 El encadenamiento opcional se debe utilizar únicamente cuando probablemente un valor no exista.
.
Por ejemplo, en un objeto usuario que siempre existe, pero la propiedad redes es opcional, entonces se debería escribir usuario.redes?.facebook y no usuario?.redes?.facebook.
.
Si abusas del encadenamiento opcional y existe un error en un objeto, el programa podría “ocultarlo” por un undefined, provocando que el debugging sea más complicado. */