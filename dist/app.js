import express from "express";
import cors from "cors";
import postMoviesRoute from "./routes/postMoviesRoute.js";
var server = express();
server.use(cors());
server.use(express.json());
server.use(postMoviesRoute);
var port = process.env.PORT || 4000;
server.listen(port, function () { return console.log("Server running in port: ".concat(port)); });
