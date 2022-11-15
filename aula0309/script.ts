/* evitar o uso do type assertion 'as' */

// const video = document.querySelector('#video') as HTMLVideoElement

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.de/json/notebook.json");
  return response.json() as Promise<Produto>;
}

async function handleProduto() {
  const produto = await fetchProduto()
  produto.nome;
}

handleProduto()


/* operador non-null usado para dizer que o retorno de um elemento não vai ser nulo*/
// const video = document.querySelector('video')
// erro de runtime caso nao exista o video
// const video = document.querySelector('video')!

// video?.volume

// document.querySelector('a')!.href = 'https://www.origamid.com'


const video1 = document.querySelector('.player') as HTMLVideoElement
const video2 = <HTMLVideoElement>document.querySelector('.player')
/* mais indicado Type assertion */
const video3 = document.querySelector<HTMLVideoElement>('.player')