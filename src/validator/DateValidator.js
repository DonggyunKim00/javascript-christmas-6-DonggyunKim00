import { ERROR_MESSAGE } from '../constant/message.js';
import { DateValidate } from '../utils/validateFn.js';

class DateValidator {
  static validate(input) {
    if (!DateValidate.validateNumber(input))
      throw ERROR_MESSAGE.INVALID_INPUT_DATE;
    if (!DateValidate.validateRange(input))
      throw ERROR_MESSAGE.INVALID_DATE_RANGE;
  }
}
export default DateValidator;
