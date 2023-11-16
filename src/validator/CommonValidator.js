import { ERROR_MESSAGE } from '../constant/message.js';
import { CommonValidate } from '../utils/validateFn.js';

/**
 * 모든 입력 받을때, 빈 입력 값 검사 예외처리 클래스
 */
class CommonValidator {
  static validate(input) {
    if (!CommonValidate.validateEmpty(input)) {
      throw ERROR_MESSAGE.INVALID_INPUT_EMPTY;
    }
  }
}

export default CommonValidator;
