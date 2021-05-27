const args = process.argv;
let total = [];

let sum1 = Number(args[2]);
let sum2 = Number(args[3]);
total.push(sum1);
total.push(sum2);

console.log(total[0] + total[1]);