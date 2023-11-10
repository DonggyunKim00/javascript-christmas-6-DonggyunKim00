import MyOrderValidator from '../validator/MyOrderValidator.js';
import Menu from './Menu.js';

class MyOrder {
  #myOrderList = [];

  createMyOrder(menuListArr) {
    for (let i = 0; i < menuListArr.length; i++) {
      const menuName = menuListArr[i][0];
      const menuAmount = menuListArr[i][1];
      this.#myOrderList.push(Menu.create(menuName, menuAmount));
    }
    this.#validateMyOrder(this.#myOrderList);
  }

  #validateMyOrder(myOrderList) {
    MyOrderValidator.validate(myOrderList);
  }
}

export default MyOrder;
