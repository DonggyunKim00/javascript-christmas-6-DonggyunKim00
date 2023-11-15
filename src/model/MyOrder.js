import { ARR_INDEX, PRICE } from '../constant/constant.js';
import MyOrderValidator from '../validator/MyOrderValidator.js';
import Menu from './Menu.js';

/**
 * 주문된 메뉴리스트 생성 및 관리 클래스
 */
class MyOrder {
  #myOrderList;

  constructor(menuListArr) {
    this.#myOrderList = this.#createMyOrder(menuListArr);
  }

  #createMyOrder(menuListArr) {
    let myOrderArr;
    try {
      myOrderArr = this.#createMenuList(menuListArr);
      this.#validateMyOrder(myOrderArr);
      return myOrderArr;
    } catch (error) {
      throw error;
    }
  }

  #validateMyOrder(myOrderList) {
    MyOrderValidator.validate(myOrderList);
  }

  #createMenuList(menuListArr) {
    const menuList = [];
    for (let i = 0; i < menuListArr.length; i++) {
      const menuName = menuListArr[i][ARR_INDEX.MENU_NAME_INDEX];
      const menuAmount = menuListArr[i][ARR_INDEX.MENU_AMOUNT_INDEX];
      const menu = Menu.create(menuName, menuAmount);
      menuList.push(menu);
    }
    return menuList;
  }

  getMyOrderList() {
    return this.#myOrderList;
  }

  getTotalMyOrderMoney() {
    let totalMyOrderMoney = 0;
    this.#myOrderList.forEach((menu) => {
      totalMyOrderMoney += menu.menuInfo.price * menu.amount;
    });
    return totalMyOrderMoney;
  }

  isApplyEvent() {
    return this.getTotalMyOrderMoney() > PRICE.FOR_APPLY_EVENT;
  }
}

export default MyOrder;
