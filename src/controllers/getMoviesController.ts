import { Request, Response } from "express";
import { moviesRepository } from "../repositories/moviesRepository.js";

export async function getMoviesController(req: Request, res: Response): Promise<void>{
    try{
        const movies = await moviesRepository();
        
        res.status(200).send(movies.rows);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}