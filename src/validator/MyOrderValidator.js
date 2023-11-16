import { ERROR_MESSAGE } from '../constant/message.js';
import { MyOrderValidate } from '../utils/validateFn.js';

/**
 * 주문 형식을 통과하여 주문이 들어왔을때, 나의 주문 검사 예외처리 클래스
 */
class MyOrderValidator {
  static validate(myOrderList) {
    if (!MyOrderValidate.validateOnlyDrink(myOrderList))
      throw ERROR_MESSAGE.INVALID_ONLY_DRINK;
    if (!MyOrderValidate.validateMenuCount(myOrderList))
      throw ERROR_MESSAGE.INVALID_TOTAL_MENU_COUNT;
  }
}

export default MyOrderValidator;
