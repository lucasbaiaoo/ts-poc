import connectionDB from "../database/db.js";
export function moviesInsertionRepository(name, streamingService, genre) {
    return connectionDB.query("INSERT INTO movies (name, streaming_service, genre) VALUES ($1, $2, $3);", [name, streamingService, genre]);
}
export function moviesConflictVerificationRepository() {
    return connectionDB.query("SELECT * FROM movies;");
}
export function getMoviesRepository() {
    return connectionDB.query("SELECT * FROM movies;");
}
export function getMoviesIdsRepository() {
    return connectionDB.query("SELECT id FROM movies;");
}
export function getMovieByIdRepository(id) {
    return connectionDB.query("SELECT * FROM movies WHERE id = $1;", [id]);
}
export function updateMovieByIdRepository(id) {
    return connectionDB.query("UPDATE movies SET already_watched = true WHERE id = $1;", [id]);
}
export function deleteMovieByIdRepository(id) {
    return connectionDB.query("DELETE FROM movies WHERE id = $1;", [id]);
}
