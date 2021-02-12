const express = require("express");
const router = express.Router();

const storyController = require("../controllers/story");

router.post("/story/create", storyController.createStory);
router.get("/story/:id", storyController.detailStory);
router.get("/stories", storyController.listStories);

module.exports = router;
