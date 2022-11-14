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
        const data = yield response.json();
        mostrarCursos(data);
    });
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === 'iniciante') {
            color = 'blue';
        }
        else {
            color = 'red';
        }
        document.body.innerHTML += `
      <div>
        <h2 style="color:${color}">${curso.nome}</h2>
        <p>Horas:${curso.horas}</p>
        <p>Aulas:${curso.aulas}</p>
        <p>Tipo:${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
        <p>${curso.tags.join(", ")}</p>
        <p>${curso.idAulas.join(" | ")}</p>

      </div>
    `;
    });
    return;
}
