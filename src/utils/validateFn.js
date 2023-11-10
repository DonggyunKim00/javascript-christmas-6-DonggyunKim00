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
      (menuArr) => menuArr.length === 2 && !isNaN(menuArr[1]),
    );
  },
  validateMenuAmount: (menuListArr) => {
    return menuListArr.every((menuArr) => menuArr[1] > 0);
  },
  validateUnique: (menuListArr) => {
    const nameArr = menuListArr.map((menuArr) => menuArr[0]);
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
};

export const DateValidate = {
  validateNumber: (input) => {
    const splitNumber = input.toString().split('');
    return splitNumber.every((char) => !isNaN(char));
  },
  validateRange: (input) => {
    if (input < 1 || input > 31) {
      return false;
    }
    return true;
  },
};
