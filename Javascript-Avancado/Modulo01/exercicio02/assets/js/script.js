const knight = createKnight("Hebert");
const bigMonster = createBigMonster();

stage.start(
    knight,
    bigMonster,
    document.querySelector("#char"),
    document.querySelector("#monster")
);

console.log(knight);
console.log(bigMonster);
