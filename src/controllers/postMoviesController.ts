import { Request, Response } from "express";
import { moviesInfoRepository } from "../repositories/moviesRepository.js";

export async function postMoviesController(req: Request, res: Response): Promise<void>{
    const name: string = req.body.name;
    const streamingService: string = req.body.streamingService;
    const genre: string = req.body.genre;

    try{
        await moviesInfoRepository(name, streamingService, genre);
        res.sendStatus(201);    
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}