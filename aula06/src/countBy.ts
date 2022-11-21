export interface CountList {
  [key: string]: number;
}

export function countBy(arr: (string | number)[]) {
  arr.reduce((acc: CountList, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
}