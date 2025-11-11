import express from "express";
import cors from "cors";
import rooms from "./data/rooms.js";

const app = express();
app.use(cors());

// base route
app.get("/", (req, res) => {
  res.send("Sankalp Yatri Nivas backend is running...");
});

// API route
app.get("/api/rooms", (req, res) => {
  res.json(rooms);
});

// ✅ Use AWS provided PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

