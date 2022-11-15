function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}

somar(3, 4);

const subtrair = (a: number, b: number, c?: number):number => a - b - (c ? c : 0)

type Callback = (event: MouseEvent) => void

function pintarTela(cor: string) {
  document.body.style.background = cor
}

pintarTela('black')

const btn = document.querySelector('button')

btn?.click()

function isString(value: any) {
  if(typeof value === 'string'){
    return true
  }
}

/* tipo void não retorna nada já o undefined é quando a função pode retornar algo e não retornou */

// function abortar(mensagem: string): never {
//   throw new Error(mensagem)
// }

// abortar('Um Erro ocorreu')
// console.log('tente novamente')

// interface Quadrado {
//   lado: number
//   perimetro(lado: number): number
// }

// function calcular(forma:Quadrado){
// }

/* Overload */
function normalizar(valor: string ): string
function normalizar(valor: string[] ): string[]
function normalizar(valor: string | string[]): string | string[] {
  if(typeof valor === 'string'){
    return valor.trim().toLowerCase()
  } else {
    return valor.map(item => item.trim().toLowerCase())
  }
} 

console.log(normalizar(' ProDuto  '))
console.log(normalizar([' ProDuto  ', 'baNaNa', 'UvA']))


function $(selector: 'a'): HTMLAnchorElement | null
function $(selector: 'video'): HTMLVideoElement | null
function $(selector: string): Element | null
function $(selector: string): Element | null {
  return document.querySelector(selector)
}

