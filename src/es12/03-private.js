/* Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral ( #). Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase. */

class User{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // metodos
    #speak(){
        return 'Hello';
    }
    saludar(){
        return `${this.speak()} ${this.name}`;
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }
}

const developer  = new User('Benjamin', 24);
console.log(developer.uAge);
console.log(developer.uAge = 20);