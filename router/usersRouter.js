// external imports
const express = require("express");

// internal imports
const router = express.Router();
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// Users page
router.get("/", decorateHtmlResponse("Users"), getUsers);
// add user
router.post("/",)

module.exports = router;
