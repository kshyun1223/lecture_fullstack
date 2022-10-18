const fs = require('fs');

const memoData = "Always fo with your passions. Never ask yourself if it's realistic or not.";

function memoMaker(directoryName, fileName, data) {
  let combinePath ="./" + directoryName + fileName;
  /* 메모장 파일 만들기 */
  console.time('메모장 파일 만들기');
  fs.writeFile(`${combinePath}.txt`, data, 'utf-8', (error) => {
    if(error === true){
      console.error('this is error');
    }
  });
  console.timeEnd('메모장 파일 만들기');

  /* JSON 파일 만들기 */
  console.time('JSON 파일 만들기');
  fs.writeFile(`${combinePath}.json`, JSON.stringify(data), 'utf-8',(error)=> {
    if(error === true) {
      console.error('this is error');
    }
  })
  console.timeEnd('JSON 파일 만들기');
}
memoMaker("test", "example-file", memoData);


