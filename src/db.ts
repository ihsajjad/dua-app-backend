import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(__dirname, "database", "dua_main.sqlite");
const db = new Database(dbPath);
const categories = db.prepare("SELECT * FROM category").all();
console.log("DB Path: ", dbPath, categories);

export default db;
