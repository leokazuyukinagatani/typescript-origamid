"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchVendas() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/vendas.json");
        const data = yield response.json();
        somarVendas(data);
    });
}
fetchVendas();
function somarVendas(vendas) {
    // let total = 0;
    // for (let i = 0; i < vendas.length; i++) {
    //   total += vendas[i][1];
    // }
    const total2 = vendas.reduce((anterior, atual) => {
        return anterior + atual[1];
    }, 0);
    document.body.innerHTML += `
  <p>Total: ${total2}</p>
  `;
}
const arr = [3, 10, 8, 15, 20];
const somar = arr.reduce((anterior, atual) => {
    return anterior + atual;
}, 0);
console.log(somar);
