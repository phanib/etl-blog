const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StorySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },

  body: {
    type: String,
    required: true,
  },
  user: { type: Schema.Types.ObjectId, ref: "user" },
  space: { type: Schema.Types.ObjectId, ref: "space" },
});

const StoryModel = mongoose.model("story", StorySchema);

module.exports = StoryModel;
