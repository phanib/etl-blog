var Story = require("../models/story");

exports.listStories = function (req, res) {
  res.send("TBI");
};

exports.detailStory = function (req, res) {
  res.send("TBI" + req.params.id);
};

exports.createStory = function (req, res) {
  res.send("TBI");
};
