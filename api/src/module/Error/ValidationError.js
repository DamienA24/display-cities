class ValidationError extends Error {
  constructor(data = [], ...args) {
    super(...args);
    Error.captureStackTrace(this, ValidationError);
    this.statusCode = 400;
    this.isError = true;
    this.responseMessage = {
      status: "error",
      message: "Validation error",
      code: 400,
      data: data,
    };
  }
}

module.exports = ValidationError;
