var Story = require("../models/story");

exports.listStories = function (req, res) {
  res.send("TBI");
};

exports.detailStory = function (req, res, next) {
  const storyId = req.params.id;
  Story.findById(storyId).exec(function (err, space) {
    if (err) {
      return next(err);
    }
    //Successful, so render
    res.status(200).json(space);
  });
};

exports.createStory = function (req, res) {
  res.send("TBI");
};
