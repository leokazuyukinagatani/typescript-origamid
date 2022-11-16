// interface Produto {
//   nome: string
//   preco: number
//   novo: boolean
// }

// let chave: keyof Produto

// let chave1: 'nome' | 'preco' | 'novo'


// function coordenadas(x: number, y: number) {
//   return { x, y }
// }

// let coord: typeof coordenadas

interface Elementos {
  a: HTMLAnchorElement
  video: HTMLVideoElement
  div: HTMLElement
  body: HTMLBodyElement
  audio: HTMLAudioElement
}




function selecionar<Chave extends keyof Elementos>(seletor:Chave): Elementos[Chave] | null {
  return document.querySelector(seletor)
}

selecionar('a')