var Space = require("../models/space");

exports.listSpaces = exports.book_list = function (req, res, next) {
  Space.find({}).exec(function (err, listSpaces) {
    if (err) {
      return next(err);
    }
    //Successful, so render
    res.status(200).json(listSpaces);
  });
};

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
