// 2차원 배열 만들기
const array1 = Array(Array(), Array());
array1[0][0] = 1;
array1[0][1] = 2;
array1[1][0] = 3;
array1[1][1] = 4;
// console.log(array1);


const array = Array(2).fill(null).map( () => Array() );
// console.log(array); //[ [], [], [], [] ]

const children = ['1','2','3','4','5'];
const array2 = Array.from(Array(2), () => Array());
// console.log(array2);

//filter 3이하인 것들만 뽑기
const testArray = [1,2,3,4,5];
const newArray = testArray.filter(function(element, index, array){
    // console.log(element +' || '+ index +' || '+ array);
    return element <= 3;
});

// console.log('newArray ' + newArray);


const children1 = ['1','2','3','4','5'];

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
    // console.log(index);
})

// console.log('...dimensions  ', ...dimensions);
// console.log('dimensions  ', dimensions);

const children2 = ['1','2','3','4','5', []];

// console.log(children2[children2.length - 1]);
//
// console.log(children2[children2.length - 1].concat(['10', '20']));

// const data1 = [{'id': '1', 'val': 'test'}, {'id': '2', 'val': 'test'}, {'id': '3', 'val': 'test'}];
// const data2 = [{'id': '1', 'val': 'test'}, {'id': '2', 'val': 'test'}, {'id': '4', 'val': 'test'}];
//
// const result1 = data1.filter((each1) => {
//     return data2.every((each2)=>{
//         return each1.id !== each2.id;
//     });
// });
//
// console.log('result1', result1);

const data0 = [];
const data1 = ['1', '2', '3'];
const data2 = ["4b3f0fa4-c775-42c3-a9c7-b1b63a164ded", "fcbf91ef-4ac7-4d2f-845f-84cb41f379a0"];

const result1 = data1.filter((each1) => {
    return data2.every((each2)=>{
        return each1 !== each2;
    });
});

console.log('result1', result1);
console.log('result2', data1.concat(data2));
console.log('result3', data0.concat(data2));
