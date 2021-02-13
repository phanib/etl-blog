const express = require("express");
const router = express.Router();

const spaceController = require("../controllers/space");

router.post("/create", spaceController.createSpace);
router.get("/:id", spaceController.detailSpace);
router.get("/", spaceController.listSpaces);

module.exports = router;
