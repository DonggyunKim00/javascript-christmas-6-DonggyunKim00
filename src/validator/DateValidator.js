import { ERROR_MESSAGE } from '../constant/message.js';
import { DateValidate } from '../utils/validateFn.js';

/**
 * 날짜를 입력 받을때, 날짜 입력 검사 예외처리 클래스
 */
class DateValidator {
  static validate(input) {
    if (!DateValidate.validateNumber(input))
      throw ERROR_MESSAGE.INVALID_INPUT_DATE;
    if (!DateValidate.validateRange(input))
      throw ERROR_MESSAGE.INVALID_DATE_RANGE;
  }
}
export default DateValidator;
