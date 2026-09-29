let char = new Knight("Hebert");
let littleMonster = new LittleMonster();

const stage = new Stage(char, littleMonster, document.querySelector("#char"), document.querySelector("#monster"));
stage.start();
