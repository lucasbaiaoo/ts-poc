import { Router } from "express";
import { getMoviesController } from "../controllers/getMoviesController.js";
var router = Router();
router.get("/movies", getMoviesController);
export default router;
