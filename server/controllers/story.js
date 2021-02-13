var Story = require("../models/story");
var Space = require("../models/space");

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

exports.createStory = async function (req, res, next) {
  const title = req.body.title;
  const description = req.body.description;
  const body = req.body.body;
  const spaceSlug = req.body.slug;

  try {
    const story = await Story.create({ title, description, body });
    await story.save();

    const space = await Space.findById(spaceSlug);
    space.stories.push(story);
    await space.save();
    res.status(200).json(story);
  } catch (e) {
    res.json({ error: "failed" });
  }
};
