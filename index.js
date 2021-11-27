// import core modules for creating server and log operations
const http = require("http");
const fs = require("fs");

// created http server
const server = http.createServer((req, res) => {
  const url = req.url;

  // Get current time for log operations
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;

  // Create responses for requests to different urls
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

  // Log every request, status code and current time to json file with writeFile method
  fs.writeFile(
    `logFile.json`,
    `\n{"Request Url": "${url}"\n"Status": "${res.statusCode}"\n"Request Time": "${dateTime}"}\n`,
    { flag: "a" },
    (err) => {
      if (err) console.log(err);
    }
  );

  res.end();
});

// Create port as variable
const port = 4000;

// Listen port for requests
server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
