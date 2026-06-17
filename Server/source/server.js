import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import rateLimiter from "./middleware/rateLimiter.js";
import chatsRoutes from "./routes/chatsRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// simple custom middleware
app.use((req, res, next) => {
  console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
  next();
});

// middleware
app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json()); //this middleware will parse the JSON bodies: req.body
app.use(rateLimiter);

app.use("/api/chats", chatsRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});