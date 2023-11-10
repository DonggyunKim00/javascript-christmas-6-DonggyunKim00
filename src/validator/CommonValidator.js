import { ERROR_MESSAGE } from '../constant/message.js';
import { CommonValidate } from '../utils/validateFn.js';

class CommonValidator {
  static validate(input) {
    if (!CommonValidate.validateEmpty(input)) {
      throw ERROR_MESSAGE.INVALID_INPUT_EMPTY;
    }
  }
}

export default CommonValidator;
