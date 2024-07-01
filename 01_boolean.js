
const arr = [1, '2', {}, undefined, null, false, true];

console.log(arr.filter(item => Boolean(item)))
console.log(arr.filter(Boolean))

if ('0') {
    console.log('string logic...')
}
let n = 0;
if (n) {
    console.log('number logic...')
}