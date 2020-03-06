function aaa () {
  navigator.clipboard.writeText(document.querySelector('#out').value)
    .then(() => {
      ChromeSamples.log('Text copied.');
    })
    .catch(() => {
      ChromeSamples.log('Failed to copy text.');
    });
}

console.log(aaa());
