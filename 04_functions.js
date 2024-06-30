// IIFE
const value = (function (){return 1})()
console.log(value)

let sum = (a, b) => a + b;

console.log(sum(1, 2))
console.log(sum(1, "2"))
console.log(sum("1", 2))
//
// const sumRef = sum;
// sum = null;
// console.log(sumRef(5, 5));

// function withHtmlComment() {
//     <!-- Some text
//     let i = 1;
//     return i;
// }

// console.log(withHtmlComment())


const functionConstructor = new Function('a, b', 'return a');
console.log(functionConstructor('Argument A'))
