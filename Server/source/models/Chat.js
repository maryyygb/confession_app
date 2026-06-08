import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    point_type: {
        type: Number,
        required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
