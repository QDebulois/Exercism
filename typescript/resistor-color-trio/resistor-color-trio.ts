
const BANDCOLORS: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

function expo(n: number, e: number, a: number = n): number {
  if (n === 0 || e === 0) { return 0 }
  if (e === 1) { return a }
  else { return expo(n, e - 1, n * a) }
}

export function decodedResistorValue(bandColors: string[]): string {
  let band1: number = BANDCOLORS.indexOf(bandColors[0]);
  let band2: number = BANDCOLORS.indexOf(bandColors[1]);
  let band3: number = expo(10, BANDCOLORS.indexOf(bandColors[2]));

  let bandsValue: number = Number(`${band1}${band2}`);
  let resistorValue: number = band3 != 0 ? bandsValue * band3 : bandsValue;

  return resistorValue >= 1000 ? `${resistorValue / 1000} kiloohms` : `${resistorValue} ohms`;
}
