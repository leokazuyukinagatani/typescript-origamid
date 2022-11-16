interface IProduto {
  nome: string
  quantidade: number
}

const produto = {
  nome: 'Notebook',
  quantidade: 10
}

const produto1= {
  nome: 'Geladeira',
  quantidade: 5,
  freezer: true
}

const produto2 = {
  nome: 'Fogao',
  quantidade: 10
}



function mostrarQuantidade(produto: IProduto) {
  console.log(produto.quantidade + 20)
}

mostrarQuantidade(produto)


/* todas as propriedas opcionais, seu uso não é indicado */
function mostrarQuantidadePartial(produto: Partial<IProduto>) {
  if(produto.quantidade){
    console.log(produto.quantidade + 20)
  }
}


interface IPost {
  titulo: string
  visualizacoes: number
  tags: string[]
  [key: string]: unknown
}


const artigo: IPost = {
  titulo: 'Como aprender HTML',
  visualizacoes: 3000,
  tags: ['HTML', 'FrontEnd'],
  autor: 'Andre'
}

/*Record */

type ObjetoLiteral1 = {
  [key: string]: unknown
}

type ObjetoLiteral2 = Record<string, unknown>

function mostrarTitulo(obj: ObjetoLiteral2) {
  if('titulo' in obj) {
    console.log(obj.titulo)
  }
}

