// external imports
const express = require("express");

// internal imports
const router = express.Router();
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const addUserValidators = require("../middlewares/users/userValidation");

// Users page
router.get("/", decorateHtmlResponse("Users"), getUsers);
// add user
router.post("/", avatarUpload, addUserValidators);

module.exports = router;
