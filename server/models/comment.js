const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/**
 * Comment Schema
 */
const CommentSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  story: { type: Schema.Types.ObjectId, ref: "story" },
  user: { type: Schema.Types.ObjectId, ref: "user" },
});

const CommentModel = mongoose.model("comment", CommentSchema);

module.exports = CommentModel;
