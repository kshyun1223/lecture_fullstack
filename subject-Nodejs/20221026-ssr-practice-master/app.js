const http = require('http');
const path = require('path') // 경로
const fs = require('fs') // 파일시스템

const server = http.createServer((req, res) => {

  const test = fs.readFileSync("./index.html",(err, data) => {
    if(err) throw err;
  })

  const script = fs.readFileSync("./script.js", (err) => {
    if(err) throw err;
  });

  const css = fs.readFileSync("./style.css", (err) => {
    if(err) throw err;
  });

  if(req.method === "GET"){

    if(req.url === "/"){
      res.writeHead(200,{"Content-Type":"text/html"})
      res.write(test)
      res.end()

    } else if (req.url === "/script.js"){
      res.writeHead(200,{"Content-Type":"text/javascript"})
      res.write(script)
      res.end()

    } else if (req.url === "/style.css"){
      res.writeHead(200,{"Content-Type":"text/css"})
      res.write(css)
      res.end()
    }
    console.log(req.url); // 브라우저에서 새로고침을 해야 동작한다
  }
});

server.listen(5678, (err) => {
  console.log('server listening on');
  if (err) throw err;
})