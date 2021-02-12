const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StorySchema = new Schema({
  title: {
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
});

const StoryModel = mongoose.model("story", StorySchema);

module.exports = StoryModel;
