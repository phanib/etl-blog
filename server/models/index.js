const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  const user = this;
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

/**
 * Validates if this a valid passport by decrypting via bcrypt
 * @param {string} password
 */
UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

const UserModel = mongoose.model("user", UserSchema);

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

const SpaceSchema = new Schema({
  spaceId: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  stories: [{ type: Schema.Types.ObjectId, ref: "story" }],
  user: { type: Schema.Types.ObjectId, ref: "user" },
});

const SpaceModal = mongoose.model("space", SpaceSchema);

module.exports = UserModel;
module.exports = StoryModel;
module.exports = SpaceModal;
