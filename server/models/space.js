const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpaceSchema = new Schema({
  slug: {
    type: String,
    unique: true,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  stories: [{ type: Schema.Types.ObjectId, ref: "story" }],
  user: { type: Schema.Types.ObjectId, ref: "user" },
});

const SpaceModel = mongoose.model("space", SpaceSchema);

module.exports = SpaceModel;
