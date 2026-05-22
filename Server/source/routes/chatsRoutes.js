import express from "express";
import {
  createChat,
  deleteChat,
  getAllChats,
  updateChat,
} from "../controllers/chatsController.js";

const router = express.Router();

router.get("/", getAllChats);
router.post("/", createChat);
router.put("/:id", updateChat);
router.delete("/:id", deleteChat);

export default router;
