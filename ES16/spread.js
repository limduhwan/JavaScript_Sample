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

var objState = {type:1,name:2,ref:3};
var objReducer = (state={})=>{
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