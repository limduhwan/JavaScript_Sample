const users = [
    {name: 'kim', age: 10, addr:'kor'},
    {name: 'joe', age: 20, addr:'usa'},
    {name: 'miko', age: 30, addr:'jp'}
]

for(var {name: n, age: a} of users){
    console.log(n +'  '+ a);
}

// for(let {name: n, age: a} of users){
//     console.log(name)
//
// }

users.forEach( (value, index, array) => {
    console.log(value);
    }
)