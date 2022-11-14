"use strict";
// function retorno<variavel>(a: variavel): variavel {
//   return a
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
// console.log(retorno<string>("A Game"))
// console.log(retorno(200))
// const numeros = [1,3,5,6,8,9,7,4]
// const frutas = ['banana', 'uva', 'maca', 'limao', 'pessego']
// function firstFive<T>(lista: T[]): T[] {
//   return lista.slice(0,5)
// }
// console.log(firstFive(numeros))
// console.log(firstFive(frutas))
// function notNull<T>(arg: T) {
//   if (arg !== null) return arg;
//   else return null;
// }
// notNull('Pedro')?.toLowerCase()
// function tipoDado<T>(a: T) {
//   const resultado = {
//     dado: a,
//     tipo: typeof a
//   }
//   return resultado
// }
// tipoDado('Teste')
// function extractText<T extends HTMLElement>(el: T) {
//   return {
//     texto: el.innerText,
//     el
//   }
// }
// const link = document.querySelector('a')
// if(link) {
//   console.log(extractText(link).el.href)
// }
// function $<T extends Element>(selector: string ): T | null {
//   return document.querySelector(selector)
// }
// const link = $<HTMLAnchorElement>('a')
// console.log(link)
const link = document.querySelector('.link');
if (link instanceof HTMLVideoElement) {
    link.volume;
}
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return yield response.json();
    });
}
function handleData() {
    return __awaiter(this, void 0, void 0, function* () {
        const notebook = yield getData('https://api.origamid.dev/json/notebook.json');
        console.log(notebook);
    });
}
handleData();
