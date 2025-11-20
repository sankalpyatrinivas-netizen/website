import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import "./config/db";
import dotenv from "dotenv";
dotenv.config();
import { swaggerSpec, swaggerUiMiddleware } from "./config/swagger";
import { connectDB } from "./config/db";




const app = express();
app.use(cors());
app.use(express.json());
connectDB();


app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api-docs", swaggerUiMiddleware.serve, swaggerUiMiddleware.setup(swaggerSpec));

export default app;
