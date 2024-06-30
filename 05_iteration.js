
const arr = [1, 2, 3, 4];
// for(const item of arr) {
//     console.log(item);
// }

const obj = {name: 'bob', age: 12}
for (const key in obj) {
    console.log(`${key} ${obj[key]}`)
}
// const iterator = arr[Symbol.iterator]();

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
//
let i = 0;
while(i < arr.length) {
    console.log('while', i, arr[i]);
    i++;
}


do {
    console.log('do', i, arr[i]);
} while (i < arr.length)