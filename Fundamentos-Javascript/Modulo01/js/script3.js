let idade = 20;

// Condicional composta (else if)
if (idade < 18) {
    console.log("Você é uma criança.");
} else if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto.");
} else if (idade >= 60) {
    console.log("Você é um idoso.");
}

/*
if (idade >= 18) {
    if (idade < 60) {
        console.log("Você é um adulto.");
    }
}
*/

/* AND
if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto.");
}
    */

/* OR 
if (idade >= 18 || idade < 60) {
    console.log("Você é um adulto.");
}
*/

// if (idade === 20) {
//     idade = idade + 15;
//     console.log("Idade adicionada com suceso!");
//     console.log(idade);
// }
