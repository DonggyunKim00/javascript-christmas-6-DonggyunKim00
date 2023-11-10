import { ERROR_MESSAGE } from '../constant/message.js';
import { MenuValidate } from '../utils/validateFn.js';

class MenuValidator {
  static validate(name) {
    if (!MenuValidate.validateExistInDb(name))
      throw ERROR_MESSAGE.INVALID_EXIST_MENU;
  }
}

export default MenuValidator;
