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
      const menuName = menuListArr[i][0];
      const menuAmount = menuListArr[i][1];
      this.#myOrderList.push(Menu.create(menuName, menuAmount));
    }
    try {
      this.#validateMyOrder(this.#myOrderList);
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
}

export default MyOrder;
