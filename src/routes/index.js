module.exports = function (app) {
    app.use("/api/messages", require("./messages/index.js"));
    app.use("/api/pictures", require("./pictures/index.js"));
};
