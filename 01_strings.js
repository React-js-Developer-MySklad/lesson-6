// const str = 'Hello Guys';
//
// console.log(str.length);
// for(let c of str) {
//     console.log(c)
// }


const name = 'Bob';
const age = 18;

const template = function (templateParts, ...keys) {

    console.log(templateParts, keys)

    return function (...values) {
        const dict = values[values.length - 1] || {};
        const result = [templateParts[0]];
        keys.forEach((key, i) => {
            const value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, templateParts[i + 1]);
        });
        return result.join("");
    }
}

// const printPerson = template`Person ${'name'} is ${'age'} y.`;
// console.log(printPerson({name, age}))
//
// const printAge = template`${0} is ${1}`
// console.log(printAge('Bob', age));

// const printName = template`${0} is ${'age'}, ${'name'} y`
// console.log(printName(name, {age: 23, name: { k: '1'}}));

//
console.log(`${name} is ${age}`)
console.log(`${name} is ${age + 20}`)
console.log(name + ' is ' + age)