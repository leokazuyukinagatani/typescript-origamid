console.log(document.constructor)

// class Produto {
//   tipo = 'produto'
//   nome: string
//   preco: number | undefined
//   constructor(nome: string, preco?: number) {
//     this.nome = nome
//     this.preco = preco
//   }
// }

class Produto {
  readonly tipo = 'produto'
  nome: string
  /* 
    public é o padrão não precisa ser definido pode ser acessado em qualquer lugar
    readonly não deixa modificar a variavel, somente leitura
    private não deixa ser acessado fora e não passa para subclasses
    protected já passa para subclasses
  */
  protected preco: number
  constructor(nome: string, preco: number) {
    this.nome = nome
    this.preco = preco
  }
  getPreco() {
    return Produto.transformarPreco(this.preco)
  }
  /* esta disponivel somente no Produto */
  static transformarPreco(preco: number) {
    return `R$ ${preco}`
  }
}

class Livro extends Produto {

}
const livro = new Produto('livro', 100)

console.log(livro.getPreco())

class Quadrado {
  readonly lados = 4;
  medida: number;
  constructor(medida: number) {
    this.medida = medida;
  }
  getPerimetro() {
    return this.medida * this.lados;
  }
  getArea() {
    return this.medida * this.medida;
  }
}

class Circulo {
  readonly PI = Math.PI;
  raio: number;
  constructor(raio: number) {
    this.raio = raio;
  }
  getPerimetro() {
    return Math.round(2 * this.PI * this.raio * 100) / 100;
  }
  getArea() {
    return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
  }
}

const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => {
  if (n < 15) {
    return new Quadrado(n);
  } else {
    return new Circulo(n);
  }
});

formas.forEach((forma) => {
  if (forma instanceof Quadrado) {
    console.log(forma.lados);
    console.log(forma.getArea());
  }
  if (forma instanceof Circulo) {
    console.log(forma.raio)
    console.log(forma.getPerimetro());
  }
});
