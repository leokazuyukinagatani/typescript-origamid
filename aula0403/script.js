"use strict";
// interface Produto {
//   nome: string
//   preco: number
//   novo: boolean
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const base = "https://api.origamid.dev/json";
        const response = yield fetch(base + url);
        return yield response.json();
    });
}
function isJogo(obj) {
    if (obj && typeof obj === "object" && "desenvolvedora" in obj) {
        return true;
    }
    else {
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
function checkInterface(obj, ...keys) {
    if (obj &&
        typeof obj === 'object' &&
        keys.filter((key) => key in obj).length === keys.length) {
        return true;
    }
    else {
        return false;
    }
}
// async function handleData() {
//   const jogo = await fetchData<Jogo>("/jogo.json");
//   console.log(jogo);
//   const livro: Livro = await fetchData<Livro>("/livro.json");
//   console.log(livro);
// }
function handleData() {
    return __awaiter(this, void 0, void 0, function* () {
        const jogo = yield fetchData("/jogo.json");
        if (checkInterface(jogo, "desenvolvedora")) {
            console.log(jogo.desenvolvedora);
        }
        const livro = yield fetchData("/livro.json");
        if (checkInterface(livro, "autor")) {
            console.log(livro.autor);
        }
    });
}
handleData();
