import { Request, Response } from "express";
import { movieByIdRepository } from "../repositories/moviesRepository.js";

export async function getMoviesByIdController(req: Request, res: Response){
    const id: number = parseInt(req.params.id);
    
    try{
        const movieById = await movieByIdRepository(id);
        console.log(movieById.rows)

        res.status(200).send(movieById.rows)
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}