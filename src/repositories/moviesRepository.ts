import connectionDB from "../database/db.js";

export function moviesInfoRepository(name: string, streamingService: string, genre: string){
    return connectionDB.query("INSERT INTO movies (name, streaming_service, genre) VALUES ($1, $2, $3);", [name, streamingService, genre]);
}

export function moviesConflictVerificationRepository(){
    return connectionDB.query("SELECT * FROM movies;")
}

export function moviesRepository(){
    return connectionDB.query("SELECT * FROM movies;")
}

export function moviesIdsRepository(){
    return connectionDB.query("SELECT id FROM movies;")
}

export function movieByIdRepository(id){
    return connectionDB.query("SELECT * FROM movies WHERE id = $1;", [id])
}