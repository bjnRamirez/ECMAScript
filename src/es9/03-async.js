async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello!');


/*
De la misma manera, for await es un ciclo repetitivo que se maneja asíncronamente. El ciclo siempre debe estar dentro de una función con async.
El valor es cada elemento del iterable puede tener cualquier nombre, por eso se inicia con let nombre. */

async function arrayOfNames(array){
    for await (let value of array){
        console.log(value);
    }
}

const name = arrayOfNames(['Oscar', 'Benjamin', 'Ana'])
console.log('after')