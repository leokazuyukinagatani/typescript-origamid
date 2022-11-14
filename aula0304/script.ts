// function retorno<variavel>(a: variavel): variavel {
//   return a
// }

// console.log(retorno<string>("A Game"))
// console.log(retorno(200))

// const numeros = [1,3,5,6,8,9,7,4]
// const frutas = ['banana', 'uva', 'maca', 'limao', 'pessego']

// function firstFive<T>(lista: T[]): T[] {
//   return lista.slice(0,5)
// }

// console.log(firstFive(numeros))
// console.log(firstFive(frutas))

// function notNull<T>(arg: T) {
//   if (arg !== null) return arg;
//   else return null;
// }

// notNull('Pedro')?.toLowerCase()


// function tipoDado<T>(a: T) {
//   const resultado = {
//     dado: a,
//     tipo: typeof a
//   }

//   return resultado
// }

// tipoDado('Teste')


// function extractText<T extends HTMLElement>(el: T) {
//   return {
//     texto: el.innerText,
//     el
//   }
// }

// const link = document.querySelector('a')

// if(link) {
//   console.log(extractText(link).el.href)
// }

// function $<T extends Element>(selector: string ): T | null {
//   return document.querySelector(selector)
// }

// const link = $<HTMLAnchorElement>('a')

// console.log(link)

const link = document.querySelector<HTMLVideoElement>('.link')

if(link instanceof HTMLVideoElement) {
  link.volume
}

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url)

  return await response.json()
}


interface Notebook {
  nome: string
  preco: number
}
async function handleData() {
  const notebook = await getData<Notebook>('https://api.origamid.dev/json/notebook.json')
  console.log(notebook)
}

handleData()