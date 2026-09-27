class Person {
    _age = 0;

    constructor(name) {
        this.name = name;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (typeof newAge == 'number') {   
            this._age = newAge;
        }
    }

    sayHi() {
        console.log(`${this.name} diz OI`);
    }
}

class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }

    sayHello() {
        super.sayHi();
       // console.log(`${this.name} é um estudante e diz OI`);
    }
}

let p1 = new Student("Hebert", 1);
p1.age = 20;

console.log(`${p1.name} tem ${p1.age} anos e matrícula #${p1.id}`);
p1.sayHello();
