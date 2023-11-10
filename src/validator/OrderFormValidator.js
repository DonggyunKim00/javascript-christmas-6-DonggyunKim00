import { ERROR_MESSAGE } from '../constant/message.js';
import { OrderValidate } from '../utils/validateFn.js';

class OrderFormValidator {
  static validate(menuListArr) {
    if (!OrderValidate.validateOrderForm(menuListArr))
      throw ERROR_MESSAGE.INVALID_INPUT_ORDER;
    if (!OrderValidate.validateMenuAmount(menuListArr))
      throw ERROR_MESSAGE.INVALID_INPUT_ORDER;
    if (!OrderValidate.validateUnique(menuListArr))
      throw ERROR_MESSAGE.INVALID_MENU_UNIQUE;
  }
}

export default OrderFormValidator;
