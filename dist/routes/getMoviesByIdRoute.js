import { Router } from "express";
import { getMoviesByIdController } from "../controllers/getMoviesByIdController.js";
import { moviesIdsMiddleware } from "../middlewares/moviesIdsMiddleware.js";
var router = Router();
router.get("/movies/:id", moviesIdsMiddleware, getMoviesByIdController);
export default router;
