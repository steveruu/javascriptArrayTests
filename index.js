const pole = [];

console.log(pole);
pole.push("banan", "jablko", "hruska"); // prida prvky na konec pole !! konec pole

console.log(pole.push("mandarinka")) // vrati delku pole po pridani prvku

console.log(pole);
console.log(`mazu ${pole.pop()}`) // odstrani posledni prvek pole a vrati ho

console.log(pole);

const kdeBANAN = pole.indexOf("banan"); // notable, ze arrays zacinaj indexem 0
console.log(kdeBANAN); // 0

const coNAINDEXU1 = pole[1]; // druhy prvek pole
console.log(coNAINDEXU1); // jablko