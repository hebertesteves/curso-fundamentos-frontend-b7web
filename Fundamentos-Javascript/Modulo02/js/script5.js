let fruits = ["Maça", "Uva", "Laranja", "Banana"];
fruits.pop(); // Remove o ultimo
fruits.push("Kiwi");
fruits.shift(); // Remove o primerio
fruits[fruits.length - 1] = "Pêra";

console.log(fruits);
console.log(fruits.length);

console.log(fruits.join(', '));
