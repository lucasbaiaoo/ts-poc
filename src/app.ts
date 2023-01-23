import express from "express";
import cors from "cors";
import postMoviesRoute from "./routes/postMoviesRoute.js";

const server = express();
server.use(cors());
server.use(express.json());
server.use(postMoviesRoute);

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server running in port: ${port}`));