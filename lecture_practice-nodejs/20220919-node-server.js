import http from 'http';
import fs from 'fs';
http.createServer(function (request, response) {
  const data = fs.readFileSync('./index.html');
  response.writeHead(200, {"content-type": "text/html; charset=utf-8"});
  response.write(data);
  response.end();
}).listen(9876, function(){
  console.log('서버가 작동되고 있습니다!');
});