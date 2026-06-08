import express from "express";
import {
  createChat,
  getChatById,
  deleteChat,
  getAllChats,
  updateChat,
} from "../controllers/chatsController.js";

const router = express.Router();

router.get("/", getAllChats);
router.get("/:id", getChatById);
router.post("/", createChat);
router.put("/:id", updateChat);
router.delete("/:id", deleteChat);

export default router
