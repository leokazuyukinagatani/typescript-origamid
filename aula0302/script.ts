const links = document.querySelectorAll('.link')
function ativarElemento(elemento: HTMLElement) {
  elemento.style.color = 'red'
  elemento.style.border = '2px solid red'
}



links.forEach((link) => {
  if(link instanceof HTMLElement) {
    ativarElemento(link)
  }
})

console.dir(links)