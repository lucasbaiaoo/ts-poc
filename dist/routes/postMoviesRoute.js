import { Router } from "express";
import { postMoviesController } from "../controllers/postMoviesController.js";
import { movieMiddleware } from "../middlewares/moviesMiddleware.js";
var router = Router();
router.post("/movies", movieMiddleware, postMoviesController);
export default router;
