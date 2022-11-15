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
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/cursos.json');
        const json = yield response.json();
        handleCursos(json);
    });
}
fetchCursos();
function isCurso(value) {
    if (value &&
        typeof value === 'object' &&
        'nome' in value &&
        'horas' in value &&
        'tags' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos(data) {
    if (data instanceof Array) {
        data.filter(isCurso).forEach((item) => document.body.innerHTML += `
          <div>
            <h2>Nome: ${item.nome}</h2>
            <p>Horas: ${item.horas}</p>
            <p>Tags: ${item.tags.join(", ")}</p>
          </div>
        `);
    }
}
