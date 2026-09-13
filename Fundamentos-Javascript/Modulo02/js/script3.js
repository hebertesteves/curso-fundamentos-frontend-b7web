let personagem = {
    nome: "Hebert",
    idade: 90,
    pais: "Brasil",
    olhos: ["preto", "azul"],
    atributos: {
        forca: 100,
        magia: 5,
        stamina: 15
    }
};

personagem.nome = "Fulano";
personagem.atributos.forca += 5;
personagem.olhos.push("verde")

console.log(`${personagem.nome} tem ${personagem.idade} anos.`);
console.log(personagem.atributos.magia);
console.log(personagem.olhos[1]);
console.log(`Força: ${personagem.atributos.forca}`);
console.log(personagem.olhos);

let personagem1 = {
    nome: "Fulano",
    idade: 90,
    carros: [
        { modelo: "BMW", cor: "Branco" },
        { modelo: "Fiat", cor: "Preto"}
    ]
};

console.log(personagem1.carros[0].cor);
console.log(personagem1.carros[1].modelo);

let pessoa = {
    nome: "Hebert",
    sobrenome: "Esteves",
    idade: 90,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(`Nome completo: ${pessoa.nomeCompleto()}`);
