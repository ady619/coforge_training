// For ->
// While ->
// DoWhile
// Foreach ->

const arr = [...Array(100000000).keys()];

console.time("for");
for (let i = 0; i < arr.length; i++) {}
console.timeEnd("for");

console.time("while");
let j = 0;
while (j < arr.length) {
  j++;
}
console.timeEnd("while");

console.time("dowhile");
let k = 0;
do {
  k++;
} while (k < arr.length);
console.timeEnd("dowhile");

console.time("forEach");
arr.forEach((element) => {});
console.timeEnd("forEach");
