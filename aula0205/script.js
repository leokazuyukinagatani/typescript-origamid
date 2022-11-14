"use strict";
const numeros = [10, 20, 30];
const valores = [10, "Taxas", 20, "Produto", 30];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
function filtrarValores(data) {
    return data.filter((item) => typeof item === "number");
}
console.log(maiorQue10(numeros));
console.log(filtrarValores(valores));
const dados = [
    ["senhor dos aneis", 800],
    ["hobbit", 700],
];
