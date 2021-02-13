const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpaceSchema = new Schema({
  _id: { type: String },

  name: {
    type: String,
    required: true,
  },
  stories: [{ type: Schema.Types.ObjectId, ref: "story" }],
  user: { type: Schema.Types.ObjectId, ref: "user" },
});

SpaceSchema.virtual("slug").get(function () {
  return this._id;
});

const SpaceModel = mongoose.model("space", SpaceSchema);

module.exports = SpaceModel;
