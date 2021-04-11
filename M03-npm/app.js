const express = require("express");
const server = express();

const logger = require("morgan");

server.use(logger("dev"));

server.use(express.static(__dirname + "/public"));

server.listen(3000, function () {
    console.log("Server is running !");
});