import express, { Request, Response } from "express";
import db from "../db";

const router = express.Router();

router.get("/:subcat_id", (req: Request, res: Response) => {
  try {
    const subcat_id = req.params.subcat_id;

    const duas = db.prepare("SELECT * FROM dua WHERE subcat_id = ?").all(subcat_id);
    res.json(duas);
  } catch (error: any) {
    console.log(`Error in : ${__filename}, message: , error.mesage`);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default router;
