/*
function somar(x, y) {
    return x + y;
}
*/

const somar = (x, y) => x + y;

console.log(somar(10, 5));

let count = 0;

function add() {
    // let count = 0;
    count += 10;
}

add();
add();

console.log(count)
