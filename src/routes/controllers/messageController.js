exports.create = function (req, res) {
    console.log("Create message");
    res.send("Create message");
};

exports.getAll = function (req, res) {
    console.log("get all messages");
    res.send("get all messages");
};