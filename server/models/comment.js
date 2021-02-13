const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  stories: [{ type: Schema.Types.ObjectId, ref: "story" }],
  user: { type: Schema.Types.ObjectId, ref: "user" },
});

const CommentModel = mongoose.model("comment", CommentSchema);

module.exports = CommentModel;
