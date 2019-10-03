let picturesRouter = require("express").Router();
let pictureController = require("../controllers/pictureController.js");

picturesRouter.get("/", pictureController.getAll);
picturesRouter.post("/", pictureController.upload);

module.exports = picturesRouter;
