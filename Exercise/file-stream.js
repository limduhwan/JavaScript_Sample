const fs = require("fs");

function aaaa() {
  let stream;
  let aaaa = {
    aaa: {
      bbb: {
        ccc: 'eee'
      }
    }
  }
  stream = fs.createWriteStream("/Users/actmember/Desktop/data.txt");

  stream.write(JSON.stringify(aaaa));
  // stream.write("Tutorial on Node.js");
  // stream.write("Introduction");
  // stream.write("Events");
  // stream.write("Generators");
  // stream.write("Data Connectivity");
  // stream.write("Using Jasmine");
}

console.log(aaaa());
