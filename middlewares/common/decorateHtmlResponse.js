function decorateHtmlResponse(page_title) {
  return function (req, res, next) {
    res.locals.html = true;
    // eslint-disable-next-line no-undef
    res.locals.title = `${page_title} - ${process.env.App_NAME}`;
    next();
  };
}

module.exports = decorateHtmlResponse;
