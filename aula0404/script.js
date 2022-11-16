"use strict";
const produto = {
    nome: 'Notebook',
    quantidade: 10
};
const produto1 = {
    nome: 'Geladeira',
    quantidade: 5,
    freezer: true
};
const produto2 = {
    nome: 'Fogao',
    quantidade: 10
};
function mostrarQuantidade(produto) {
    console.log(produto.quantidade + 20);
}
mostrarQuantidade(produto);
/* todas as propriedas opcionais, seu uso não é indicado */
function mostrarQuantidadePartial(produto) {
    if (produto.quantidade) {
        console.log(produto.quantidade + 20);
    }
}
const artigo = {
    titulo: 'Como aprender HTML',
    visualizacoes: 3000,
    tags: ['HTML', 'FrontEnd'],
    autor: 'Andre'
};
function mostrarTitulo(obj) {
    if ('titulo' in obj) {
        console.log(obj.titulo);
    }
}
