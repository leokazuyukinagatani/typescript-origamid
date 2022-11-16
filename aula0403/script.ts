interface Produto {
  nome: string
  preco: number
  novo: boolean
}

let chave: keyof Produto

let chave1: 'nome' | 'preco' | 'novo'


function coordenadas(x: number, y: number) {
  return { x, y }
}

let coord: typeof coordenadas