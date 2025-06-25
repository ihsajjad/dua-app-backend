import express, { Request, Response } from "express";
import cors from "cors";

import categoryRoutes from "./routes/category.routes";
import duaRoutes from "./routes/dua.routes";
import subCategoryRoutes from "./routes/subCategory.routes";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/duas", duaRoutes);
app.use("/api/sub-categories", subCategoryRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on Port:${PORT}`);
});
