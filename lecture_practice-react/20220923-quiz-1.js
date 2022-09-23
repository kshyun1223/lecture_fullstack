const http = require('http');
const fs = require('fs');

const setdomComponent = (tagName, content, attributeName, props) => {
  let getDataArr = [];
  try {
    if(typeof tagName === 'string' && typeof props === 'object' && typeof attributeName === 'string'){
      if(getDataArr.length === 0) {
        let tempArray = [];
        tempArray.push("<");
        tempArray.push(tagName + '\u00A0' + attributeName +"=\"");
        for(const keys in props) {
          tempArray.push( '\u00A0' + keys + ":" + props[keys] + ";");
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

let dynamicElement = setdomComponent("div", "hello", "style", {"width":"100px", "height":"100px", "background-color":"cadetblue"});

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