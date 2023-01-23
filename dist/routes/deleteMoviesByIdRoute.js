import { Router } from "express";
import { moviesIdsMiddleware } from "../middlewares/moviesIdsMiddleware.js";
import { deleteMoviesByIdController } from "../controllers/deleteMoviesByIdController.js";
var router = Router();
router["delete"]("/movies/:id", moviesIdsMiddleware, deleteMoviesByIdController);
export default router;
