class NotFoundError extends Error {
  constructor(data = {}, ...args) {
    super(...args);
    Error.captureStackTrace(this, NotFoundError);
    this.statusCode = 404;
    this.isError = true;
    this.responseMessage = {
      status: "error",
      message: "Ressource not found",
      code: 404,
      data: data,
    };
  }
}

module.exports = NotFoundError;
