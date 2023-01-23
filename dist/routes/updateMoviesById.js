import { Router } from "express";
import { updateMoviesByIdController } from "../controllers/updateMoviesByIdController.js";
import { moviesIdsMiddleware } from "../middlewares/moviesIdsMiddleware.js";
var router = Router();
router.put("/movies/:id", moviesIdsMiddleware, updateMoviesByIdController);
export default router;
