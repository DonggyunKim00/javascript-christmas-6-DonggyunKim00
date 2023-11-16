import { MENUS } from '../db/data.js';
import MenuValidator from '../validator/MenuValidator.js';

/**
 * 메뉴 생성 및 db의 메뉴 확인 클래스
 */
class Menu {
  #menuInfo = {};
  #amount;

  constructor(name, amount) {
    this.#validateMenu(name);
    this.menuInfo = MENUS.find((menu) => menu.name === name);
    this.amount = amount;
  }

  static create(name, amount) {
    return new Menu(name, amount);
  }

  #validateMenu(name) {
    MenuValidator.validate(name);
  }
}

export default Menu;
