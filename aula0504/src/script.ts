// const body = $('body')
// console.log(body.addClass('ativo'))


// console.log(_.difference([1,2,32131,3123,2131,4], [2,3,1,4]))

/*uso para quando uma biblioteca não possue tipagem disponivel*/
declare const Vimeo: any

const iframe = document.getElementById('vimeo')
const player = new Vimeo.Player(iframe)

console.log(player)

export {
  
}
