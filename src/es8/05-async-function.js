/* Este tipo de funciones se suelen utilizar mucho sobre todo para hacer peticiones a servidores, dado que al no ser instantaneo es necesario crear un hilo, o nuevo proceso de ejecución.
De esta manera no se interrumpe el flujo de ejecución principal de tu aplicación y tu aplicación sigue funcionando mientras llega esa respuesta del servidor.
 */

//En este bloque de código el profesor lo que hace es simular esa demora con el método setTimeout( ), y añade una demora de 2 segundos.

const fnAsync = () =>{
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout( () => resolve('AsynC!!'), 2000)
            : reject(new Error('Error!'));
    });
}

//En este bloque de código el profesor lo que hace es definir esa función asíncrona que se ejecutará en segundo plano sin interrumpir el flujo de ejecucón del resto de la aplicación sabiendo que la respuesta llegará 2 segundos más tarde.
const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}
// La constante something guardará el retorno de la función fnAsync que en este caso es verdadero

//En este bloque de código el profesor lo que hace es mostrar algo por consola y también llamar a la función async( ) mostrándote el orden de ejecución, dónde se pueden ver el resultado de los métodos instantaneos y al final el resultado de la función asíncrona
console.log('Before');
anotherFn()
console.log('After')
// Before
// After
// AsynC!!
// Hello



//Cómo utilizar funciones asíncronas
/* La función asíncrona se crea mediante la palabra reservada async y retorna una promesa.*/
async function asyncFunction () {    }

const asyncFunction = async () => {     }

/* La palabra reservada await significa que espera hasta que una promesa sea resuelta y solo funciona dentro de una función asíncrona. Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada. */

async function asyncFunction () {
    try {
        const response = await promesa()
        return response
    } catch (error) {
        return error
    }
}

/* ¿Cuál es la mejor forma de manejar promesas, then o async / await? Ambas son muy útiles, manejar ambas te hará un mejor desarrollador. */

