const fs = require('fs');

let directoryName = "hello-filesystem";

fs.mkdir("./" + directoryName, function (err) {
  if(err) {
    console.log(err);
  }
});