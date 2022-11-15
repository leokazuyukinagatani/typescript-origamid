"use strict";
// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json')
//   const json = await response.json()
//   handleCursos(json)
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
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const json = yield response.json();
        handleProduto(json);
    });
}
function isProduto(value) {
    if (value &&
        typeof value === 'object' &&
        'nome' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduto(data) {
    if (isProduto(data)) {
        console.log(data);
    }
}
