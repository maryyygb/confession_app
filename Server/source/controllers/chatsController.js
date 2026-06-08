import Chat from "../models/Chat.js";

export async function getAllChats(_, res) {
  try {
    const chat = await Chat.find();
    res.status(200).send(chat);
  } catch (error) {
    console.error("Error in getAllChats controller: ", error);
    res.status(500).json({ message: "Internal Server Error." });
  }
}

export async function getChatById(req, res) {
  try {
    const chat = await Chat.findById(req.params.id);

    if (!chat) return res.status(400).json({ message: "Chat not found! " });
    res.status(200).send(chat);
  } catch (error) {
    console.error("Error in getChatById controller:", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

export async function createChat(req, res) {
  try {
    const { point_type, content } = req.body;
    const chat = new Chat({ point_type, content });
    const savedChat = await chat.save();
    res.status(201).json(savedChat);
  } catch (error) {
    console.error("Error in createChat controller:", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

export async function updateChat(req, res) {
  try {
    const { point_type, content } = req.body;
    const updatedChat = await Chat.findByIdAndUpdate(
      req.params.id,
      { point_type, content },
      { new: true },
    );
    if (!updateChat)
      return res.status(404).json({ message: "Chat not found!" });
    res.status(200).json({ message: "Chats successfully updated!" });
  } catch (error) {
    console.error("Error in updateChat controller:", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

export async function deleteChat(req, res) {
  try {
    const deletedChat = await Chat.findByIdAndDelete(req.params.id);
    if (!deletedChat)
      return res.status(404).json({ message: "Chat not found!" });
    res.status(200).json({ message: "Chats successfully deleted!" });
  } catch (error) {
    console.error("Error in deleteChat controller:", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}
