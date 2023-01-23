import connectionDB from "../database/db.js";

export function moviesInfoRepository(name: string, streamingService: string, genre: string){
    return connectionDB.query("INSERT INTO movies (name, streaming_service, genre) VALUES ($1, $2, $3);", [name, streamingService, genre]);
}

export function moviesConflictVerificationRepository(){
    return connectionDB.query("SELECT * FROM movies;")
}