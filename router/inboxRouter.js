// external imports
const express = require("express");
const router = express.Router();
// internal imports

const {
  getInbox,
  searchUser,
  addConversation,
  getMessages,
  sendMessage
} = require("../controller/inboxContoller");

const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const { checkLogin } = require("../middlewares/common/checkLogin");
const attachmentUpload = require("../middlewares/inbox/attachmentUpload")

// Inbox page
router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

// search user for conversation
router.post("/search", checkLogin, searchUser);

// add conversation
router.post("/conversation", checkLogin, addConversation);

// get messages of a conversation
router.get("/messages/:conversation_id", checkLogin, getMessages);

// send message
router.post("/message", checkLogin, attachmentUpload, sendMessage)


module.exports = router;
