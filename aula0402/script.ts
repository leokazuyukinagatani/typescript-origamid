const produto0 = ["Notebook", 2500];

const produto1: (string | number)[] = ["Notebook", 2500];
/* uso de tuple */
const produto2: [string, number] = ["Notebook", 2500];

/*as const */

function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);

  if (el) {
    return [el, el.innerText] as const;
  } else {
    return null;
  }
}

const button = getText('button')

console.log(button)
