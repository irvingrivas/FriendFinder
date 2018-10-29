var friendData = require("../data/friendData");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        diffArr = [];
        for (let i = 0; i < friendData.length; ++i) {
            let total = 0;
            for (let j = 0; j < friendData[i].scores.length; ++j) {
                total += Math.abs(friendData[i].scores[j] - parseInt(req.body.scores[j]);
            }
            diffArr.push(total);
        }

        var tmpminind = Number.MAX_SAFE_INTEGER;
        var ind = 0;
        for (let i in diffArr) {
            if (diffArr[i] < tmpminind) {
                tmpminind = diffArr[i];
                ind = i;
            }
        }
        friendData.push(req.body);
        res.json(friendData[ind]);
    });
}