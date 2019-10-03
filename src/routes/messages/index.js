let messagesRouter = require("express").Router();
let messageController = require("../controllers/messageController.js");

messagesRouter.get("/", messageController.getAll);
messagesRouter.post("/", messageController.create);

module.exports = messagesRouter;
