import connectionDB from "../database/db";
export function moviesInfoRepository(name, streamingService, genre) {
    return connectionDB.query("INSERT INTO movies (name, streaming_service, genre) VALUES ($1, $2, $3);", [name, streamingService, genre]);
}
