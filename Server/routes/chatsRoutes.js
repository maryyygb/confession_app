import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("You just fetched the notes!")
})

// POST
router.post("/", (req, res) => {
    res.status(201).json({ message: "Chats successfully created!" })
})

// PUT
router.put("/:id", (req, res) => {
    res.status(200).json({ message: "Chats successfully updated!" })
})

// DELETE
router.delete("/:id", (req, res) => {
    res.status(200).json({ message: "Chats successfully deleted!" })
})

export default router