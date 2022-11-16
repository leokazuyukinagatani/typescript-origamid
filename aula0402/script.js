"use strict";
const produto0 = ["Notebook", 2500];
const produto1 = ["Notebook", 2500];
/* uso de tuple */
const produto2 = ["Notebook", 2500];
/*as const */
function getText(selector) {
    const el = document.querySelector(selector);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
}
const button = getText('button');
console.log(button);
