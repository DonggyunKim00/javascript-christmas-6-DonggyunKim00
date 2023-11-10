import { MENUS } from '../db/data.js';
import MenuValidator from '../validator/MenuValidator.js';

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
