export function getAllChats(req, res) {
    res.status(200).send("You just fetched the notes!");
}

export function createChat(req, res) {
    res.status(201).json({ message: "Chats successfully created!" });
}

export function updateChat(req, res) {
    res.status(200).json({ message: "Chats successfully updated!" });
}

export function deleteChat(req, res) {
    res.status(200).json({ message: "Chats successfully deleted!" });
}