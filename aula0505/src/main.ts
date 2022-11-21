import _ from 'lodash'
import ClipboardJS from 'clipboard'

const button = new ClipboardJS('button')

function handleCopy(event: ClipboardJS.Event) {
  event.clearSelection()
  console.log(event.text)
}

button.on('success', handleCopy)

interface Produto {
  nome: string
}

const livro:Produto = {
  nome: 'O senhor dos Aneis'
}

console.log(_.difference([1,3,4,5,6,7],[1,2,3,4,5,6]))