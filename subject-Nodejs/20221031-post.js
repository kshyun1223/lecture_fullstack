if (req.method === "post") {
  let body = "";

  req.on('data', (data) => {
    body += data;
    console.log(data, "this is first event");
    const test = new URLSearchParams(body);
    console.log(timeData);
    const stamp = timeData.getFullYear () + "" + "0"+ (timeData.getMonth() + 1) + timeData.getDate() + "-" + timeData.getHours() + "-" + timeData.getMinutes();
    for(const [key, value] of test){
      console.log(key, "그리고", value);
      fs.writeFile(`../save ${stamp}-${key}.txt`, value, (err) => {
        if (err) throw err;
      });
    }
  });
  req.on('end', () => {
    console.log(body, "this is last event");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(main);
  })
}

