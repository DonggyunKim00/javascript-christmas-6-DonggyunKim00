import { ARR_INDEX, PRICE } from '../constant/constant.js';
import MyOrderValidator from '../validator/MyOrderValidator.js';
import Menu from './Menu.js';

class MyOrder {
  #myOrderList = [];
  #totalMyOrderMoney = 0;

  init() {
    this.#myOrderList = [];
  }
  createMyOrder(menuListArr) {
    for (let i = 0; i < menuListArr.length; i++) {
      const menuName = menuListArr[i][ARR_INDEX.MENU_NAME_INDEX];
      const menuAmount = menuListArr[i][ARR_INDEX.MENU_AMOUNT_INDEX];
      this.#myOrderList.push(Menu.create(menuName, menuAmount));
    }
    try {
      this.#validateMyOrder(this.#myOrderList);
      this.calculateMyOrder();
    } catch (error) {
      this.init();
      throw error;
    }
  }

  #validateMyOrder(myOrderList) {
    MyOrderValidator.validate(myOrderList);
  }

  getMyOrderList() {
    return this.#myOrderList;
  }

  calculateMyOrder() {
    this.#myOrderList.forEach((menu) => {
      this.#totalMyOrderMoney += menu.menuInfo.price * menu.amount;
    });
  }

  getTotalMyOrderMoney() {
    return this.#totalMyOrderMoney;
  }

  isApplyEvent() {
    return this.#totalMyOrderMoney > PRICE.FOR_APPLY_EVENT;
  }
}

export default MyOrder;
