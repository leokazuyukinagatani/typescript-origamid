const { body }: { body: HTMLElement } = document;

console.log(body);

// function handleData({nome, preco}: {nome:string; preco?: number}) {
//   nome.includes('book')
//   preco?.toFixed()
// }

interface Produto {
  nome: string;
  preco?: number;
}

function handleData({ nome, preco }: Produto) {
  nome.includes("book");
  preco?.toFixed();
}

handleData({
  nome: "notebook",
  preco: 1000,
});

// function handleClick({
//   currentTarget,
//   pageX,
//   pageY
// }: {
//   currentTarget: EventTarget | null; 
//   pageX: number;
//   pageY: number;
// }) {
//   if(currentTarget instanceof HTMLElement) {
//     currentTarget.innerHTML = `<h1>Mouse click em: X: ${pageX} e Y: ${pageY}</h1>`
//   }
// }

function handleClick({
  currentTarget,
  pageX,
  pageY
}: MouseEvent) {
  if(currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML = `<h1>Mouse click em: X: ${pageX} e Y: ${pageY}</h1>`
  }
}

document.documentElement.addEventListener('click', handleClick)


function comparar(tipo: 'menor' | 'maior', ...rest:number[]) {
  if(tipo === 'menor') {
    return Math.min(...rest)
  }else if(tipo === 'maior') {
    return Math.max(...rest)
  }else {
    return 'Tipo não disponivel'
  }
}

console.log(comparar('menor', 3,4,5,6,7,8,9,10,20,30))
console.log(comparar('maior', 3,4,5,6,7,8,9,10,20,30))