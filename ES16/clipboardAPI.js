const clipboard = require('clipboard-polyfill');

function aaa() {
  return new Promise( function(resolve,reject) {
    clipboard.writeText('aaaa');
  }).then(() => {
    console.log('Text copied.');
  })
    .catch(() => {
      console.log('Failed to copy text.');
    });
}

console.log(aaa());
