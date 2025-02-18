/* eslint-disable no-undef */
// external imports
const createError = require("http-errors");

// internal imports

// 404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requist content was not found!"));
}

// default error handler

function errorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.status(err.status || 500);
  if (res.locals.html) {
    // html response
    res.render("error", {
      title: "Error page",
    });
  } else {
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
