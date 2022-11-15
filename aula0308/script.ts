// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json')
//   const json = await response.json()
//   handleCursos(json)
// }

// fetchCursos()

// function handleCursos(data: unknown) {
//   /* O typescript lê normalmente esta linha */
//   if(data instanceof Array) {
//     console.log('É uma instância de Array')
//   }
//   /* o typescript não lê esta linha, por esta razão ele não sabe seu retorno, por que ele não executa a função */
//   if(Array.isArray(data)){
//     console.log('Outra forma de ver se o dado é um array')
//   }
// }

// /* o valor true é somente quando é passado uma string */
// /* value is string: uso do type predicate para ajudar o typescript a utilizar typeguard com funções, somente disponivel para uma função boolean*/
// function isString(value: unknown): value is string {
//   return typeof value === 'string'
// }


// function handleData(data: unknown) {
//   if(isString(data)){
//     data.toLowerCase
//   }
// }
async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json')
  const json = await response.json()
  handleProduto(json)
}

interface Produto {
  nome: string
  preco: number
}

function isProduto(value: unknown): value is Produto{
  if(
    value && 
    typeof value === 'object' && 
    'nome' in value
    ){
    return true    
  }else{
    return false
  }
}

function handleProduto(data: unknown) {
  if(isProduto(data)){
    console.log(data)
  }
}