// external imports
const express = require("express");

// internal imports
const router = express.Router();
const { getInbox } = require("../controller/inboxContoller");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// Inbox page

router.get("/", decorateHtmlResponse("Inbox"), getInbox );

module.exports = router;
