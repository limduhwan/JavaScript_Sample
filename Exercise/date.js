// console.log(new Date().getMonth()+1);
//
//
// console.log("2019".substr(2    ,2));
//
//
// console.log(new Date(2019, 04, 22));

// console.log(new Date(1590545314762))

function dateOneMonthAgo() {
  let nowDate = new Date();
  let yesterDate = nowDate.getTime() - (1*24*31*60*60*1000);
  nowDate.setTime(yesterDate);

  let yesterYear = nowDate.getFullYear();
  let yesterMonth = nowDate.getMonth() + 1;
  let yesterDay = nowDate.getDate();

  if(yesterMonth < 10) {yesterMonth = '0'+yesterMonth ;}
  if(yesterDay < 10) {yesterDay = '0'+yesterDay ;}

  return yesterYear+'-'+yesterMonth+'-'+yesterDay;
}

function dateSevenDaysAgo() {
  let nowDate = new Date();
  let yesterDate = nowDate.getTime() - (1*24*7*60*60*1000);
  nowDate.setTime(yesterDate);

  let yesterYear = nowDate.getFullYear();
  let yesterMonth = nowDate.getMonth() + 1;
  let yesterDay = nowDate.getDate();

  if(yesterMonth < 10) {yesterMonth = '0'+yesterMonth ;}
  if(yesterDay < 10) {yesterDay = '0'+yesterDay ;}

  return yesterYear+'-'+yesterMonth+'-'+yesterDay;
}

console.log(dateOneMonthAgo());
console.log(dateSevenDaysAgo());
