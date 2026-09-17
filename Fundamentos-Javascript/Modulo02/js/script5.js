let fruits = ["Maça", "Uva", "Laranja", "Banana"];
// fruits.pop(); // Remove o ultimo
// fruits.push("Kiwi");
// fruits.shift(); // Remove o primerio
// fruits[fruits.length - 1] = "Pêra";

// console.log(fruits);
// console.log(fruits.length);

// console.log(fruits.join(', '));

// fruits.sort();
// fruits.reverse();
// console.log(fruits);

/*
let bigFruits = fruits.filter((item) => {
    return item.length > 4;

    // if (item.length > 4) {
    //     return true;
    // } else {
    //     return false;
    // }
    
});
*/

let bigFruits = fruits.filter((value, index, array) => value.length > 4);
console.log(bigFruits);

let resultEvery = fruits.every((value) =>  value.length > 3);

if (resultEvery) {
    console.log("Todos são maior que 3");
} else {
    console.log("Não são todos maior que 3");
}

let resultSome = fruits.some((value) => value.length > 3);

if (resultSome) {
    console.log("Algum item e maior que 3");
} else {
    console.log("Nenhum item e maior que 3");
}

if (fruits.includes('Uva')) {
    console.log("Tem uva sim!");
} else {
    console.log("Não tem uva...");
}

console.log("\n");
let cars = [
    { brand: "Fiat", year: 2022},
    { brand: "BMW", year: 2018},
    { brand: "Ferrari", year: 2020}
]

cars.sort((a, b) => {
    // if (a.year > b.year) {
    //     return 1;
    // } else if (a.year < b.year) {
    //     return -1
    // } else {
    //     return 0;
    // }
    return a.year - b.year
});

console.log(cars);
