const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const next = require("next");
const cookieParser = require("cookie-parser");
const AWS = require("aws-sdk");
// const morgan = require('morgan');
const dotenv = require("dotenv");
dotenv.config();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const readLastLines = require('read-last-lines');
const isPortReachable = require('is-port-reachable');
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cookieParser());
    server.use(express.bodyParser());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(cookieParser());




    server.get("/news/:slug", async (req, res) => {
      app.render(req, res, "/news", {});
    });
    server.get("/news/create", async (req, res) => {
      app.render(req, res, "/news/create", {});
    });


    // server.use(morgan('combined', { stream: logger.stream }));
    server.get("*", (req, res) => handle(req, res));

    server.listen(3000, (err) => {
      console.log("listenig on port 3000")
      if (err) throw err;
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
