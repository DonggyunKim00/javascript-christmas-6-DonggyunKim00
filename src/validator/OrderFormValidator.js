import { ERROR_MESSAGE } from '../constant/message.js';
import { OrderValidate } from '../utils/validateFn.js';

/**
 * 주문 입력 받을 때, 주문 형식 검사 예외처리 클래스
 */
class OrderFormValidator {
  static validate(menuListArr) {
    if (!OrderValidate.validateOrderForm(menuListArr))
      throw ERROR_MESSAGE.INVALID_INPUT_ORDER;
    if (!OrderValidate.validateMenuAmount(menuListArr))
      throw ERROR_MESSAGE.INVALID_MENU_AMOUNT;
    if (!OrderValidate.validateUnique(menuListArr))
      throw ERROR_MESSAGE.INVALID_MENU_UNIQUE;
  }
}

export default OrderFormValidator;
