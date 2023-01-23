import { Router } from "express";
import { postMoviesController } from "../controllers/postMoviesController";
import { movieMiddleware } from "../middlewares/moviesMiddleware";
var router = Router();
router.post("/movies", movieMiddleware, postMoviesController);
export default router;
