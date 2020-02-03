//배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

const oneTwoThree = [1, 2, 3];

const result = oneTwoThree.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
}, 0);
// 0 1 0
// 1 2 1
// 3 3 2
console.log(result) // 6

//홀수만 필터링 하기
const result2 = oneTwoThree.reduce((acc, cur) => {
    if (cur % 2) { // 1이면 true이니까
        acc.push(cur);
    }
    return acc;
}, []);
console.log(result2); // [1, 3]
