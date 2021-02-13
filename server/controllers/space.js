var Space = require("../models/space");

exports.listSpaces = exports.book_list = function (req, res, next) {
  Space.find({}, "title author")
    .populate("name")
    .exec(function (err, listSpaces) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.status(200).json(listSpaces);
    });
};

exports.detailSpace = function (req, res) {
  const spaceId = req.params.id;
  Space.findById(spaceId)
    .populate("name")
    .exec(function (err, space) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.status(200).json(space);
    });
};

exports.createSpace = function (req, res) {
  res.send("TBI");
};
