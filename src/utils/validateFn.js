import { ARR_INDEX, COUNT, DATE } from '../constant/constant.js';
import { MENUS } from '../db/data.js';

export const CommonValidate = {
  validateEmpty: (input) => {
    if (!input) {
      return false;
    }
    return true;
  },
};

export const OrderValidate = {
  validateOrderForm: (menuListArr) => {
    return menuListArr.every(
      (menuArr) =>
        menuArr.length === COUNT.EACH_MENU_ARR_FORM_LENGTH &&
        !isNaN(menuArr[ARR_INDEX.MENU_AMOUNT_INDEX]),
    );
  },
  validateMenuAmount: (menuListArr) => {
    return menuListArr.every(
      (menuArr) => menuArr[ARR_INDEX.MENU_AMOUNT_INDEX] > 0,
    );
  },
  validateUnique: (menuListArr) => {
    const nameArr = menuListArr.map(
      (menuArr) => menuArr[ARR_INDEX.MENU_NAME_INDEX],
    );
    return menuListArr.length === new Set(nameArr).size;
  },
};

export const MenuValidate = {
  validateExistInDb: (menuName) => {
    return MENUS.find((menu) => menu.name === menuName);
  },
};

export const MyOrderValidate = {
  validateOnlyDrink: (myOrderList) => {
    return !myOrderList.every((order) => order.menuInfo.category === '음료');
  },
  validateMenuCount: (myOrderList) => {
    const count = myOrderList.reduce((acc, order) => acc + order.amount, 0);
    return count <= COUNT.MAX_ORDER;
  },
};

export const DateValidate = {
  validateNumber: (input) => {
    const splitNumber = input.toString().split('');
    return splitNumber.every((char) => !isNaN(char));
  },
  validateRange: (input) => {
    if (input < DATE.FIRST_DAY || input > DATE.LAST_DAY) {
      return false;
    }
    return true;
  },
};
