import { URL_BASE, Produto } from './global.js'
import pluginSlide from './pluginSlide.js'

pluginSlide('div')


export const livro: Produto = {
  nome: 'O Hobbit',
  preco: 2000
}

declare global {
  interface Usuario {
    nome: string
    id: number
  }
}




console.log(livro)
console.log(URL_BASE)
