const http = require('http');
const fs = require("fs");
console.log("Hello");
const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      const filestream = fs.createReadStream('./content/big.txt', 'utf8');
      filestream.on("open", () => {
        filestream.pipe(res);
      });
      filestream.on('error', (err) => res.end(err));
      break;
    case '/about':
      res.end("About Page");
      break;
    default:
      res.end();
  }

});
server.listen(5000, () => console.log("Server started and listen on port 5000"));