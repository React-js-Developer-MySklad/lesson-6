console.log('\nnon strict\n')
console.log('null == undefined', null == undefined)
console.log('"0" == 0', "0" == 0);
console.log('0 == false', 0 == false)
console.log('"0" == false', "0" == false)
console.log('[100] == 100',[100] == 100)


console.log('\n\nstrict\n')
console.log('null === undefined',null === undefined)
console.log('"0" === 0',"0" === 0);
console.log('0 === false',0 === false)
console.log('"0" === false', "0" === false)
console.log('[100] === 100',[100] === 100)
console.log('"0" === 0',"0" === 0);
console.log('+"0" === 0', +"0" === 0);

console.log('NaN === NaN', NaN === NaN)
console.log('isNaN(character)', isNaN(parseInt('abc')))
console.log('isNaN(number)', isNaN('0'))


