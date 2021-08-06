function randn_bm() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
};


let arrayVal = new Array(10);

for (let index = 0; index < arrayVal.length; index++) {
    console.log(arrayVal[index]);
    arrayVal[index] = randn_bm();
    console.log(arrayVal[index]);
}
console.log(arrayVal);

