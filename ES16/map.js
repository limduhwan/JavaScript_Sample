const users = [
    {name: 'kim', age:10, addr:'kor'},
    {name: 'joe', age:20, addr:'usa'},
    {name: 'miko', age:30, addr:'jp'}
];

users.map( ({name, age, addr} ) => {
    console.log(name);
    console.log(age);
    console.log(addr);
})
