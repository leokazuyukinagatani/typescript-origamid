"use strict";
;
function preencherDados(dados) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
    </div>
  `;
}
preencherDados({
    nome: "Computador",
    preco: 3000,
    teclado: true,
});
preencherDados({
    nome: "Notebook",
    preco: 2500,
    teclado: false,
});
function pintarCategoria(categoria) {
    console.log(categoria);
    if (categoria === 'desing') {
        console.log('pintar vermelho');
    }
}
