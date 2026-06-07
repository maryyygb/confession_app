import express from "express";
import chatsRoutes from "./routes/chatsRoutes.js";

const app = express();

app.use("/api/chats", chatsRoutes);

app.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});

// mongodb+srv://maryyygb:M@ryG120805@app.vq1wpx2.mongodb.net/?appName=app