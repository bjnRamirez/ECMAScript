/* Las siguientes características de ES2020 o ES11 que aprenderás son: nuevo tipo de dato bigint y operador Nullish Coalescing (??).
 */

//El nuevo dato primitivo bigint permite manejar números enteros muy grandes. Existen dos formas de crear un bigint: el número entero seguido de n o mediante la función BigInt
const aBigNumber = 987456321456987456456n;
const anotherBigNumber = BigInt(987456321456987456456);

console.log(aBigNumber);
console.log(anotherBigNumber);