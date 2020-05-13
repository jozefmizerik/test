const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const port = process.env.PORT || 9000;
const server = http.createServer(app);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

server.listen(port, () => {
  console.log("Server is running at port " + port);
});
