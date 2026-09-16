let fruits = ["Maça", "Uva", "Laranja", "Banana"];
// fruits.pop(); // Remove o ultimo
// fruits.push("Kiwi");
// fruits.shift(); // Remove o primerio
// fruits[fruits.length - 1] = "Pêra";

// console.log(fruits);
// console.log(fruits.length);

// console.log(fruits.join(', '));

fruits.sort();
fruits.reverse();
console.log(fruits);

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
