const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("You are at home page");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("You are at about page");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("You are at contact page");
  } else if (url === "/projects") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("You are at projects page");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("Page not found");
  }
  res.end();
});

const port = 4000;

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
