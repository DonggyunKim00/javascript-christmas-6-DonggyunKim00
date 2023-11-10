import { ERROR_MESSAGE } from '../constant/message.js';
import { MyOrderValidate } from '../utils/validateFn.js';

class MyOrderValidator {
  static validate(myOrderList) {
    if (!MyOrderValidate.validateOnlyDrink(myOrderList))
      throw ERROR_MESSAGE.INVALID_ONLY_DRINK;
    if (!MyOrderValidate.validateMenuCount(myOrderList))
      throw ERROR_MESSAGE.INVALID_TOTAL_MENU_COUNT;
  }
}

export default MyOrderValidator;
