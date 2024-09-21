import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import productRoutes from "./app/modules/products/product.route";
import orderRoutes from "./app/modules/order/order.route";
import categoryRoute from "./app/modules/category/category.route";

// parsers
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// routes
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/categories", categoryRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("sport zone");
});
export default app;
