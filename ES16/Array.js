// 2차원 배열 만들기
const array1 = Array(Array(), Array());
array1[0][0] = 1;
array1[0][1] = 2;
array1[1][0] = 3;
array1[1][1] = 4;
console.log(array1);


const array = Array(2).fill(null).map( () => Array() );
console.log(array); //[ [], [], [], [] ]


const array2 = Array.from(Array(2), () => Array());
console.log(array2);