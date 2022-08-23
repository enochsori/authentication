"use strict";

const app = require("express");
const morgan = require("morgan");

const PORT = 8000;

app()
  .use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })

  .use(morgan("tiny"))

  .get("/", (req, res) => {
    res.send("Hello World");
  })
  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
