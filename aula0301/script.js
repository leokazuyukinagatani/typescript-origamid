"use strict";
class Produto {
    constructor(nome) {
        this.nome = nome;
    }
}
class Livro extends Produto {
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === "O Hobbit") {
        return new Livro("O Hobbit", "J. R. R. Tolkien");
    }
    if (busca === "Darksouls") {
        return new Jogo("Darksouls", 1);
    }
    return null;
}
const produto = buscarProduto("O Hobbit");
const livro = new Produto("A Guerra dos Tronos");
// if (produto instanceof Livro) {
//   console.log(produto.nome);
// }
if (produto instanceof Produto) {
    console.log(produto.nome);
}
