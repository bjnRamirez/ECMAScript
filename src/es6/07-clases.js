/* La palabra reservada class es una forma para crear clases y manejar la herencia en JavaScript, permitiendo resolver problemas con el paradigma de programación orientada a objetos (POO). */

/*
La estructura de clases en JavaScript consiste en:

-Definir la clase con la palabra reservada class, seguido del nombre (por convención se empieza con mayúscula).
-La función constructora sirve para crear las variables necesarias en la instancia del objeto, a partir de los argumentos en la instancia.
-Para definir atributos necesitas el contexto this, que representa la instancia del objeto.
-Métodos para definir las acciones de la clase.
-Para crear una instancia, deberás declarar una variable e invocar la clase con la palabra reservada new. */


class Calculator {
    // Constructor
    constructor() {
        // Atributos
        this.valueA = 0
        this.valueB = 0
    }

    // Método
    suma(num1, num2){
        this.valueA = num1
        this.valueB = num2
        return this.valueA + this.valueB
    }
}

// Instancia
const calculadora = new Calculator()

calculadora.suma(2,2) //4


// declarando
class User{};
//instancia de una clase
// const newUser = new User();

class User{
    // Metodos
    saludo(){
        return 'Hello';
    }
};

const gndx = new User();
console.log(gndx.saludo());

const bebeloper = new User();
console.log(bebeloper.saludo())

//constructor

class User{
    //Constructor
    constructor(){
        console.log('Nuevo usuario');
    }
    saludo(){
        return 'Hello';
    }
}

const benjamin = new User();

// this

class User {
    constructor(name){
        this.name = name;
    }
    // metodos
    speak(){
        return 'Hello';
    }
    saludo(){
        return `${this.speak()} ${this.name}`;
    }
}

const evert = new User('evert');
console.log(evert.saludo());


// setter getters

class User{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // metodos
    speak(){
        return 'Hello';
    }
    saludar(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const developer  = new User('Benjamin', 24);
console.log(developer.uAge);
console.log(developer.uAge = 20);