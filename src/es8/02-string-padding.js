//Rellenar un string o padding
/* El padding consiste en rellenar un string por el principio o por el final, con el carácter especificado, repetido hasta que complete la longitud máxima. */

//Este método recibe dos argumentos:

/*
-La longitud máxima a rellenar, incluyendo el string inicial.
-El string para rellenar, por defecto, es un espacio.
Si la longitud a rellenar es menor que la longitud del string actual, entonces no agregará nada.
*/

const string = 'Hello';

console.log(string.padStart(6, '_'));
console.log(string.padEnd(6, '_'));

/* Método padStart
El método padStart completa un string con otro string en el inicio hasta tener un total de caracteres especificado. */

'abc'.padStart(10) // "       abc"
'abc'.padStart(10, "foo") // "foofoofabc"
'abc'.padStart(6,"123465") // "123abc"
'abc'.padStart(8, "0") // "00000abc"
'abc'.padStart(1) // "abc"

/* Método padEnd
El método padEnd completa un string con otro string en el final hasta tener un total de caracteres especificado. */

'abc'.padEnd(10) // "abc       "
'abc'.padEnd(10, "foo") // "abcfoofoof"
'abc'.padEnd(6, "123456") // "abc123"
'abc'.padEnd(1) // "abc"