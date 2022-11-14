interface IProduto{
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados(dados: IProduto) {
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

type Categorias = 'desing' | 'codigo' | 'descod'

function pintarCategoria(categoria :Categorias) {
  console.log(categoria)
  if(categoria === 'desing') {
    console.log('pintar vermelho')
  }
}