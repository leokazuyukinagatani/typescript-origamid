async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json')
  const data = await response.json()
  mostrarCursos(data)
}

fetchCursos()

interface ICurso {
  nome: string
  horas: number
  aulas: number
  gratuito: boolean
  tags: string[]
  idAulas: number[]
  nivel: 'iniciante' | 'avancado'
}

function mostrarCursos(cursos: ICurso[]) {
  cursos.forEach(curso => {
    let color
    if(curso.nivel === 'iniciante'){
      color = 'blue'
    } else {
      color = 'red'
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
    `
  })
  return
}