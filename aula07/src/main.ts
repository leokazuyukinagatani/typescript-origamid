import { Slide } from "./Slide";

const container = document.getElementById("slide");
const elements = document.getElementById("slide-elements");
const controls = document.getElementById("slide-controls");

console.log(container);
console.log(elements);
console.log(controls);
if (container && elements && controls && elements.children.length) {
  new Slide(container, Array.from(elements.children), controls, 3000);
}
