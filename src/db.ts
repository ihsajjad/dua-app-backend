import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(__dirname, "database", "dua_main.sqlite");
const db = new Database(dbPath);

export default db;
