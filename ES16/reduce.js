//배열.reduce((누적값, 현재값, 인덱스, 요소) => { return 결과 }, 초깃값);

const oneTwoThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const oneTwoThreeFour = [[1,2], [3, 4, 5, 6, 7, 8], [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] ];

const result = oneTwoThree.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
}, 0);
// 0 1 0
// 1 2 1
// 3 3 2
// console.log(result) // 6

//홀수만 필터링 하기
const result2 = oneTwoThree.reduce((acc, cur) => {
    if (cur % 2) { // 1이면 true이니까
        acc.push(cur);
    }
    return acc;
}, []);
// console.log(result2); // [1, 3]

const result3 = oneTwoThreeFour.reduce((acc, cur) => {
    return acc+cur.length;
}, 0);
console.log(result3 >= 20); // [1, 3]

// const result1 = data1.filter((each1) => {
//     return data2.every((each2)=>{
//         return each1 !== each2;
//     });
// });

// console.log( dimensions.filter( ({width, height}) => width < 300 ).forEach( ({width, height}) => console.log(width, height) ) );
