// external imports
const express = require("express");
const router = express.Router();
// internal imports

const { getInbox, searchUser} = require("../controller/inboxContoller");

const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const { checkLogin } = require("../middlewares/common/checkLogin");

// Inbox page
router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

// search user for conversation
router.post("/search", checkLogin, searchUser);



module.exports = router;
