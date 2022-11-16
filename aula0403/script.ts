// interface Produto {
//   nome: string
//   preco: number
//   novo: boolean
// }

// let chave: keyof Produto

// let chave1: 'nome' | 'preco' | 'novo'

// function coordenadas(x: number, y: number) {
//   return { x, y }
// }

// let coord: typeof coordenadas

// interface Elementos {
//   a: HTMLAnchorElement
//   video: HTMLVideoElement
//   div: HTMLElement
//   body: HTMLBodyElement
//   audio: HTMLAudioElement
// }

// function selecionar<Chave extends keyof Elementos>(seletor:Chave): Elementos[Chave] | null {
//   return document.querySelector(seletor)
// }

// selecionar('a')

async function fetchData<T>(url: string): Promise<T> {
  const base = "https://api.origamid.dev/json";
  const response = await fetch(base + url);
  return await response.json();
}

interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataformas: string[];
}

interface Livro {
  nome: string;
  ano: number;
  autor: string;
  paginas: number;
}

function isJogo(obj: unknown): obj is Jogo {
  if (obj && typeof obj === "object" && "desenvolvedora" in obj) {
    return true;
  } else {
    return false;
  }
}
/* verificando somente uma propriedade */
// function checkInterface<T>(obj: unknown, key: keyof T): obj is T {
//   if (obj && 
//     typeof obj === "object" &&
//     key in obj
//     ) {
//     return true;
//   } else {
//     return false;
//   }
// }

function checkInterface<Interface>(
  obj: unknown,
  ...keys: Array<keyof Interface>
): obj is Interface {
  if (
    obj &&
    typeof obj === 'object' &&
    keys.filter((key) => key in obj).length === keys.length
  ) {
    return true;
  } else {
    return false;
  }
}




// async function handleData() {
//   const jogo = await fetchData<Jogo>("/jogo.json");

//   console.log(jogo);

//   const livro: Livro = await fetchData<Livro>("/livro.json");

//   console.log(livro);
// }

async function handleData() {
  const jogo = await fetchData("/jogo.json");

  if(checkInterface<Jogo>(jogo, "desenvolvedora")){
    console.log(jogo.desenvolvedora);
  }

  const livro: Livro = await fetchData("/livro.json");

  if(checkInterface<Livro>(livro, "autor")){
    console.log(livro.autor);
  }

}

handleData();
