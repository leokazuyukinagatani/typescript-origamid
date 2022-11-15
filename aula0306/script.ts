function typeGuard(value: any) {
  if (typeof value === "string") {
    return value.toLowerCase();
  }

  if (typeof value == "number") {
    return value.toFixed();
  }

  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

typeGuard(200);
typeGuard("522");
typeGuard(document.body);

const obj = {
  nome: "Leo",
};

if ("nome" in obj) {
  console.log(obj.nome);
}
// if('sobrenome' in obj){
//   console.log(obj.nome)
// }

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();
  handleProduto(json);
}

interface Produto {
  nome: string;
  preco: number;
}

function handleProduto(data: Produto) {
  console.log(data);
  if('preco' in data){
    document.body.innerHTML += `
    <p>Nome: ${data.nome}</p>
    <p>Preço: ${data.preco}</p>
  `
  }

}

fetchProduto()
