class Person {
    static hands = 2;
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
        console.log(`Oi, eu sou ${this.name} e tenho ${Person.hands} mãos.`);
    }

    // static sayHi() {
    //     console.log("Oi");
    // }
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

function createPerson(name, age) {
    let p = new Person(name);
    p.age = age;
    return p;
}

let s1 = new Student("Hebert", 1);
s1.age = 20;

console.log(`${s1.name} tem ${s1.age} anos e matrícula #${s1.id}`);
s1.sayHello();

let p1 = createPerson("Hebert", 90);
p1.sayHi();

console.log(`${p1.name} tem ${p1.age} anos e tem ${Person.hands} mãos.`);
//Person.sayHi();
