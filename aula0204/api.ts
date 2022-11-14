interface IEmpresa {
  fundacao: number
  nome: string
  pais: string
}

interface IProduct {
  nome: string
  preco: number
  descricao: string
  garantia: string
  seguroAcidentes: boolean
  empresaFabricante: IEmpresa
  empresaMontadora: IEmpresa
}

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json')
  const data = await response.json()
  showProduct(data)
}

fetchProduct()

function showProduct(data:IProduct) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>preco:${data.preco}</p>
      <p>descricao:${data.descricao}</p>
      <div>
        <h3>Empresa Montadora</h3>
        <p>${data.empresaMontadora.nome}</p>
      </div>
    </div>
  `
}