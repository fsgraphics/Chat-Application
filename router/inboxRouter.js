// external imports
const express = require("express");

// internal imports
const router = express.Router();
const { getInbox } = require("../controller/inboxContoller");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");

// Inbox page

router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

module.exports = router;
