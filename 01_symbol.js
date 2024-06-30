const id = Symbol('id');
const secondId = Symbol('id')


const user = {
    [id]: 1,
    name: 'Bob'
}

user[id] = 2;
//
console.log('user', user);
console.log('user.id', user.id);
console.log('user[id]', user[id]);
console.log('user[secondId]', user[secondId]);
//
for(const key in user) {
    console.log(`for key: ${key} is`, user[key])
}
//
user.id = 123;
console.log(user.id)


