const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Story Schema
 */
const StorySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    default: "",
  },
  body: {
    type: String,
    required: true,
  },
  user: { type: Schema.Types.ObjectId, ref: "user" },
  space: { type: Schema.Types.ObjectId, ref: "space" },
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
});

const StoryModel = mongoose.model("story", StorySchema);

module.exports = StoryModel;
