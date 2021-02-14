const express = require("express");
const router = express.Router();
const spaceController = require("../controllers/space");

router.post("/create", spaceController.createSpace);
router.get("/:slug", spaceController.detailSpace);

module.exports = router;
