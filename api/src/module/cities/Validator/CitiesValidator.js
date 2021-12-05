import Validator from "./../../Validator";
import Joi from "joi";

export class CodeValidator extends Validator {
  constructor(data) {
    super();
    try {
      this.schema = Joi.object().keys({
        code: Joi.string().required(),
      });
    } catch (err) {
      throw err;
    }
    this.data = data;
  }
}
