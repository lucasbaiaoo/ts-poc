import pkg from "pg";
import dotevn from "dotenv";
dotevn.config();
var Pool = pkg.Pool;
var connectionDB = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});
export default connectionDB;
