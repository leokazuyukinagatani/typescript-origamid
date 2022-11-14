// const button = document.querySelector('button')

// function handleClick(event: PointerEvent) {
//   console.log(event)
// }

// button?.addEventListener('pointerdown', handleClick)


// function handleScroll(event: Event) {
//   console.log(event)
// }

// window.addEventListener('scroll', handleScroll)

// function ativarMenu(event: Event) {
//   if(event instanceof MouseEvent) {
//     console.log(event.pageX)
//   }
//   if(event instanceof TouchEvent) {
//     console.log(event.touches[0].pageX)
//   }
//   console.log(event)
// }

// document.documentElement.addEventListener('mousedown', ativarMenu)
// document.documentElement.addEventListener('touchstart', ativarMenu)

const button = document.querySelector('button')

/*------Não utilizar o this assim pois não se sabe o que ele pode ser ----*/
// function handleClick(this:HTMLButtonElement, event: MouseEvent) {
//   console.log(event)
//   console.log(this)
// }

/*---------O ideal é utilizar com current target */
function handleClick(event: MouseEvent) {
  const elemento = event.currentTarget
  if(elemento instanceof HTMLButtonElement){
    console.log(elemento.innerText)
  }
}


button?.addEventListener('click', handleClick)