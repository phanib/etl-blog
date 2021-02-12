const express = require("express");
const router = express.Router();

const spaceController = require("../controllers/space");

router.post("/space/create", spaceController.createSpace);
router.get("/space/:id", spaceController.detailSpace);
router.get("/spaces", spaceController.listSpaces);

module.exports = router;
