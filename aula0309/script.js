"use strict";
/* evitar o uso do type assertion 'as' */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.de/json/notebook.json");
        return response.json();
    });
}
function handleProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const produto = yield fetchProduto();
        produto.nome;
    });
}
handleProduto();
/* operador non-null usado para dizer que o retorno de um elemento não vai ser nulo*/
// const video = document.querySelector('video')
// erro de runtime caso nao exista o video
// const video = document.querySelector('video')!
// video?.volume
// document.querySelector('a')!.href = 'https://www.origamid.com'
const video1 = document.querySelector('.player');
const video2 = document.querySelector('.player');
/* mais indicado Type assertion */
const video3 = document.querySelector('.player');
