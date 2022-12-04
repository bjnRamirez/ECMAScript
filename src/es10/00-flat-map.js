//flat
/* El método flat de los array permite aplanar los elementos internos de un array permitiendo eliminar array internos.
Si se quiere aplanar todo el arreglo sin pasar una profundidad exacta, se puede hacer uso de Infinity.
*/
const array = [1,1,2,3,4, [1,3,5,6, [1,2,4]]];
console.log(array.flat(3));

// flatmap
/* Permite aplanar los elementos de un array en un nivel, pasando un función que mapeara cada elemento del nuevo array.*/
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(num => [num, num * 2]));

/* Este método no se podría utilizar para array que tengan más de un nivel de profundidad. Sin embargo, se pueden combinar los métodos flat y map para tener un mismo resultado. */

const numbers2 = [1, 2, 3, 4, [5, 6, [7, 8, 9]]];
console.log(numbers2.flat(Infinity).map(num => num * 2)) // [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]