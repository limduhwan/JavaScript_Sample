function getDataSuccess() {
  return new Promise(function(resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// console.log(getDataSuccess());

// resolve()의 결과 값 data를 resolvedData로 받음

let aa = '';
getDataSuccess().then(function(resolvedData) {
  aa = resolvedData; // 100
});

console.log(getDataSuccess());

// function getDataFail() {
//   return new Promise(function(resolve, reject) {
//     reject(new Error("Request is failed"));
//   });
// }

// reject()의 결과 값 Error를 err에 받음
// console.log(getDataFail().then(function(err) {
//   console.log(err);
// }));

// function getDataTong() {
//   return new Promise(function(resolve, reject) {
//     $.get('url 주소/products/1', function(response) {
//       if (response) {
//         resolve(response);
//       }
//       reject(new Error("Request is failed"));
//     });
//   });
// }
//
// // 위 $.get() 호출 결과에 따라 'response' 또는 'Error' 출력
// getDataTong().then(function(data) {
//   console.log(data); // response 값 출력
// }).catch(function(err) {
//   console.error(err); // Error 출력
// });
//
// console.log(getDataTong());
