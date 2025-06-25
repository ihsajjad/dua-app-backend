import express, { Request, Response } from "express";
import db from "../db";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  try {
    const categories = db.prepare("SELECT * FROM category").all();
    res.json(categories);
  } catch (error: any) {
    console.log(`Error in : ${__filename}, message: `, error.mesage);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default router;
