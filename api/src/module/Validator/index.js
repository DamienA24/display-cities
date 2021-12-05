const Joi = require("joi");
const ValidationError = require("../Error/ValidationError");

class Validator {
  constructor() {
    this.data = {};
    this.schema = {};
  }

  formatError(err) {
    if (err.details && Array.isArray(err.details)) {
      return err.details.map((value) => {
        return {
          message: value.message,
          path: value.path,
        };
      });
    } else {
      return { message: "Error while getting validation infos" };
    }
  }

  validate() {
    return new Promise((resolve, reject) => {
      return Joi.validate(this.data, this.schema, (err, value) => {
        if (err) {
          console.log(err);
          return reject(new ValidationError(this.formatError(err), err.name));
        }
        return resolve(value);
      });
    });
  }
}

module.exports = Validator;