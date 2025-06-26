import express, { Request, Response } from "express";
import db from "../db";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  try {
    const subCategories = db.prepare("SELECT * FROM sub_category").all();

    res.json(subCategories);
  } catch (error: any) {
    console.error(`Error in : ${__filename}, message: `, error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.get("/:cat_id", (req: Request, res: Response) => {
  try {
    const cat_id = req.params.cat_id;
    const subCategories = db
      .prepare("SELECT * FROM sub_category WHERE cat_id = ?")
      .all(cat_id);

    res.json(subCategories);
  } catch (error: any) {
    console.error(`Error in : ${__filename}, message: `, error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default router;
