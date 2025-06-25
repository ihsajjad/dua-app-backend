import express, { Request, Response } from "express";
import db from "../db";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  try {
    const duas = db.prepare("SELECT * FROM dua").all();
    res.json(duas);
  } catch (error: any) {
    console.log(`Error in : ${__filename}, message: `, error.mesage);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default router;
