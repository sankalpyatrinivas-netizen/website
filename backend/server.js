import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// import mock data
import rooms from "./data/rooms.js";

// base route
app.get("/", (req, res) => {
  res.send("Sankalp Yatri Nivas backend is running...");
});

// API route
app.get("/api/rooms", (req, res) => {
  res.json(rooms);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
