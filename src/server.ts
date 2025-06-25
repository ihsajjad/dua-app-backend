import express from "express";
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
