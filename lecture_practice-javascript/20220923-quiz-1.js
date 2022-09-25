const http = require('http');
const fs = require('fs');

/* setdomComponent */
const setdomComponent = (tagName, content, attributeName, props) => {
  let getDataArr = []; // realDOM...?
  try {
    if(typeof tagName === 'string' && typeof props === 'object' && typeof attributeName === 'string'){ // type check
      if(getDataArr.length === 0) { // 내용이 없으면
        let tempArray = []; // virtualDOM...?
        tempArray.push("<"); // 꺽쇠 넣고
        tempArray.push(tagName + '\u00A0' + attributeName +"=\""); // 태그명 띄고 속성명 이퀄 | \u00A0 === &nbsp
        for(const keys in props) { // props 매개변수로 들어온 객체에서 키만 순회하면서
          tempArray.push( '\u00A0' + keys + ":" + props[keys] + ";"); // 한칸띄고 키 : 그 키의 값;
        };
        tempArray.push("\">");
        getDataArr.push(tempArray.join(''));
      };
    }
    getDataArr.push(content);
    getDataArr.push(`</${tagName}>`);
  } catch (e) {
    console.error(e, "need checking arguments data type");
  } finally {
    return getDataArr.join("");
  }
}

let dynamicElement = setdomComponent("div", "hello nodemon!", "style", {"width":"100px", "height":"100px", "background-color":"cadetblue"});

const mainPage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${dynamicElement}
</body>
</html>
`;

const byteChecker = string => {return string.length * 2 + "byte"};

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type':'text/html'});
  response.write(mainPage);
  response.end();
}).listen(5555, () => {
  console.log(byteChecker(mainPage), "server listening on port 5555");
});

/* 문제점이 뭘까? */
// 1. 내용을 수정하고 다시 실행해보면 이미 포트가 사용중이라고 에러가 뜬다
// 2. fs 변수를 만들어 놨는데 관련 내용은 없다



