// Template literals: old
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

// Template literals: now
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// Multi-line strings: old
let lorem = 'esto es un string \n' + 'esto es otra linea';
console.log(lorem)

// Multi-line strings: now
let lorem2 = `Esta es una frase epica
la continuacion de esa frase epica.`
console.log(lorem2)
