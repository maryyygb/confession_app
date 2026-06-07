import express from "express";
import chatsRoutes from "./routes/chatsRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/chats", chatsRoutes);

connectDB();

app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});
