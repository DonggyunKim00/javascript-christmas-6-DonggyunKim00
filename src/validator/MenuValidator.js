import { ERROR_MESSAGE } from '../constant/message.js';
import { MenuValidate } from '../utils/validateFn.js';

/**
 * 메뉴가 생성될때, db에 메뉴가 실제로 있는지 검사 예외처리 클래스
 */
class MenuValidator {
  static validate(name) {
    if (!MenuValidate.validateExistInDb(name))
      throw ERROR_MESSAGE.INVALID_EXIST_MENU;
  }
}

export default MenuValidator;
