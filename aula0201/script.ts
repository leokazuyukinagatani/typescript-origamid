const produto = "Livro";
const preco = 200;

const carro = {
  marca: "Fiat",
  portas: 4,
};

function somar(a: number, b: number) {
  return a + b;
}

const nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = "R$" + produto.preco;
  return produto;
}

const produtoNovo = transformarPreco(nintendo);

console.log(produtoNovo);

function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

console.log(normalizarTexto(" DeSiGN"));



/*----------------------------------------------------------------*/
/*Utilizando Typescript-------------------------------------------*/
/*----------------------------------------------------------------*/
const input = document.querySelector("input");

const total = localStorage.getItem("total");
if(input && total) {
  input.value = total
  calcularGanho(Number(input.value));
}

function calcularGanho(value:number) {
  const p = document.querySelector("p");
  if(p){
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
  if(input) {
    localStorage.setItem("total", input.value);
    calcularGanho(Number(input.value))
  }
}

if(input) {
  input.addEventListener('keyup', totalMudou)
}
