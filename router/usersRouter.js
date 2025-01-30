// external imports
const express = require("express");

// internal imports
const router = express.Router();
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidation");
const {checkLogin} = require("../middlewares/common/checkLogin");

// Users page
router.get("/", decorateHtmlResponse("Users"), checkLogin, getUsers);
// add user
router.post(
  "/",
  checkLogin,
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

// remove user
router.delete("/:id", removeUser);
module.exports = router;
