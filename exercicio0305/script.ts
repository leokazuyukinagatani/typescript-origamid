function roundOfValue(value: number): number;
function roundOfValue(value: string): string;
function roundOfValue(value: string | number): number | string {
  if (typeof value === "string") {
    // value = Number(value)
    // value = Math.ceil(value)
    // value = String(value)
    Math.ceil(Number(value)).toString();
    return value;
  } else {
    return Math.ceil(value);
  }
}

console.log(roundOfValue(19.5));
console.log(roundOfValue("26.8"));
