var Space = require("../models/space");

/**
 * Fetches data for a specific space with stories attached
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.detailSpace = function (req, res, next) {
  const slug = req.params.slug;

  Space.find({ _id: slug })
    .populate("stories")
    .exec(function (err, space) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.status(200).json(space);
    });
};

/**
 * Lists all spaces
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.listSpaces = function (req, res, next) {
  Space.find({}).exec(function (err, space) {
    if (err) {
      return next(err);
    }
    //Successful, so render
    res.status(200).json(space);
  });
};

/**
 * Creates a new space
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.createSpace = function (req, res, next) {
  const slug = req.body.slug;
  const name = req.body.name;

  Space.create({ _id: slug, name: name }).exec(function (err, space) {
    if (err) {
      return next(err);
    }
    //Successful, so render
    res.status(200).json(space);
  });
};
