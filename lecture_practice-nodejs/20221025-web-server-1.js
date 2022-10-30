import path from 'path';
import http from 'http';

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader('Contene-Type', 'text/html');
  } else if (req.method === "POST") {
    let body = "";
    req.on('data', (data) => {
      body += data;
      data = data.toString('utf8');
      console.log(data, "this is first event");
    });
    req.on('end', () => {
      console.log(body, "this is second event");

      req.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(main);
    });
  }
});
server.listen(5588,()=>{
  console.log('server running');
})