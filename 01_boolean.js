
const arr = [1, '2', undefined, null];

console.log(arr.filter(item => Boolean(item)))
console.log(arr.filter(Boolean))
