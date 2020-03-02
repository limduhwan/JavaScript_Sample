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

//filter 3이하인 것들만 뽑기
const testArray = [1,2,3,4,5];
const newArray = testArray.filter(function(element, index, array){
    console.log(element +' || '+ index +' || '+ array);
    return element <= 3;
});

console.log('newArray ' + newArray);


const children = ['1','2','3','4','5'];

const dimensions = [
    { width: 400, height: 100 },
    { width: 300, height: 400 },
    { width: 200, height: 300 },
    { width: 300, height: 300 },
    { width: 200, height: 300 },
]

let heights = [];

children.forEach((child, i) => {
    let { width, height } = dimensions[i]
    let index = heights.indexOf(Math.min(...heights))
    console.log(index);
})

console.log('...dimensions  ', ...dimensions);
console.log('dimensions  ', dimensions);
