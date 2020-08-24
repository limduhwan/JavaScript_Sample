const useCaseButtons = ['Collaboration', 'Teaming', 'Productivity'];
let startIndex = -1;

function changeSelectedButtonIndexTimer() {
  startIndex = (startIndex === (useCaseButtons.length - 1)) ? 0 : startIndex + 1;
  console.log('===', startIndex);
}

console.log(setInterval(changeSelectedButtonIndexTimer, 3000));




