function typeGuard(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

console.log(typeGuard("Leo"));
console.log(typeGuard(20.05));
console.log(typeGuard(document.body));
