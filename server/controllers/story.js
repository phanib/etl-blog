var Story = require("../models/story");
var Space = require("../models/space");

/**
 * Fetches a detailed story data
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.detailStory = function (req, res, next) {
  const storyId = req.params.id;

  Story.findById(storyId)
    .populate("comments")
    .exec(function (err, space) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.status(200).json(space);
    });
};

/**
 * Creates a new story attached to a space
 * @param {} req
 * @param {*} res
 * @param {*} next
 */
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
