const dimensions = [
  { width: 400, height: 100 },
  { width: 300, height: 400 },
  { width: 200, height: 300 },
  { width: 300, height: 300 },
  { width: 200, height: 300 },
]
// 1.Filter flat map ??
console.log( dimensions.filter( ({width, height}) => width < 300 ).flatMap( (element) => element.split(" ")) );

// 2.Filter some // 배열 중 요소 하나라도 통과하는지
// console.log( dimensions.filter( ({width, height}) => width < 300 ).some( ({width}) => width > 100 ) );
// console.log( dimensions.filter( ({width, height}) => width < 300 ).some( ({width}) => width > 500 ) );

// 3.Filter foreach
// console.log( dimensions.filter( ({width, height}) => width < 300 ) );
// console.log( dimensions.filter( ({width, height}) => width < 300 ).forEach( ({width, height}) => console.log(width, height) ) );

// 4.Filter reduce

// 5.Filter map
// console.log(dimensions.filter( ({width, height}) => width < 300 ).map( ({width}) => (width*2) ));
// console.log(dimensions.filter( ({width, height}) => width < 300 ).map( (element) => element ));
// console.log(dimensions.filter( ({width, height}) => width < 300 ).map( ({width, height}) => ({width: width*2, height}) ));

// 6.Filter findindex
// 7.Filter map sort
// 8.Map reduce
