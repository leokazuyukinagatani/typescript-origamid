"use strict";
const body = $('body');
console.log(body.addClass('ativo'));
const iframe = document.getElementById('vimeo');
const player = new Vimeo.Player(iframe);
console.log(player);
