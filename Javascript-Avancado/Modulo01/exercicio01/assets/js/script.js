let log = new Log(document.querySelector(".log"));

let char = new Knight("Hebert");
let littleMonster = new BigMonster();

const stage = new Stage(
    char, 
    littleMonster, 
    document.querySelector("#char"), 
    document.querySelector("#monster"), 
    log
);

stage.start();
