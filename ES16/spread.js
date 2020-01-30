var arrState = [1,2,3,4,5];
var arrReducer = (state=[])=>{
    return [
        ...state,
        '야호'
    ];
    //즉 새로운 요소를 가장 뒤에 추가한 새 배열을 리턴하라는 뜻
    //아래의 코드와 그 결과가 동일하다.
    // return [].concat(state,'야호');
};

console.log(arrReducer(arrState));

///////////////////////////////////////
var objState = {type:1,name:2,ref:3};
var objReducer = ( state={} ) => {
    return {
        ...state,
        name:'야호'
    };
    //즉 새로운 요소를 머지한 새 객체를 리턴하라는 뜻
    //아래의 코드와 그 결과가 동일하다.
    // return Object.assign({},state,{
    //   name:'야호'
    // });
};

console.log(objReducer(objState));

///////////////////////////////////////
var {a1, a2, ...rest_a} = {a1: 10, a2: 20, a3: 30, a4: 40};

console.log(a1);
console.log(a2);
console.log(rest_a);
///////////////////////////////////////

var key = 'it is key';
var { 'an-apple':an_apple, [key]:it_is_key } = {'an-apple' : 10, 'it is key' : 20};
console.log(an_apple);
console.log(it_is_key);

///////////////////////////////////////
const kim = {
    name: 'kim',
    age: 10,
    addr: 'kor',
    friends: [
        {name: 'joe', age: 20, addr: 'usa'},
        {name: 'miko', age: 30, addr: 'jp'}
    ]
}

var { name: userName, friends: [, {name: jpFriend}] } = kim;
console.log(userName);
console.log(jpFriend);

///////////////////////////////////////
const animalList = ["CAT", "DOG", "TIGER"];
const [cat, ...restAnimalList] = animalList;
console.log(cat);
console.log(animalList);

