"use strict";
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
somar(3, 4);
const subtrair = (a, b, c) => a - b - (c ? c : 0);
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela('black');
const btn = document.querySelector('button');
btn === null || btn === void 0 ? void 0 : btn.click();
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}
function normalizar(valor) {
    if (typeof valor === 'string') {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map(item => item.trim().toLowerCase());
    }
}
console.log(normalizar(' ProDuto  '));
console.log(normalizar([' ProDuto  ', 'baNaNa', 'UvA']));
function $(selector) {
    return document.querySelector(selector);
}
