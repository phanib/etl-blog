const express = require("express");
const router = express.Router();
const storyController = require("../controllers/story");

router.post("/create", storyController.createStory);
router.get("/:id", storyController.detailStory);

module.exports = router;
