const fs = require('fs');

let totalMember = 22;




for (let i = 0; i < totalMember; i++) {
  let exportData = `
    const issue${i+1} = "work";

    module.exports = {
      issue${i+1}
    };
  `;
  fs.writeFile(`./issue${i+1}.js`, exportData, 'utf-8', (err) => {
    if(err) throw err;
  });
}

