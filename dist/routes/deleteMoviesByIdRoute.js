import { Router } from "express";
import { moviesIdsMiddleware } from "../middlewares/moviesIdsMiddleware.js";
var router = Router();
router["delete"]("/movies/:id", moviesIdsMiddleware);
export default router;
