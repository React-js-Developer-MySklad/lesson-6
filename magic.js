const data = 'Why This is Funny?'.match(/([A-Z?]+)/g).join('');
console.log(`data: ${data}`)
const result = console.log.call.call.call.call.call.apply(a => a, [null, data])
console.log(result)

// const fn = (a, b) => console.log('fn', a, b);
// fn.call(null, [1, 2])
// fn.apply(null, [1, 2])

// const obj = {
//     toString() {
//         return 'Hello From Object'
//     }
// };
// console.log(
//     fn.call.apply(
//         function(...a) {
//             console.log(this.toString(), a)
//             return a[0]
//         },
//         [obj, 2, 3, 4]))

// apply [] -> 2, 3, 4
// call (function, 2, 3 4)
// function (...rest) => [2, 3, 4]

