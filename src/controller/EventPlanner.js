import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import CommonValidator from '../validator/CommonValidator.js';
import DateValidator from '../validator/DateValidator.js';
import OrderFormValidator from '../validator/OrderFormValidator.js';
import MyOrder from '../model/MyOrder.js';

class EventPlanner {
  #date;
  #myOrders = new MyOrder();

  /**
   * 날짜 및 메뉴 입력받기
   */
  async init() {
    OutputView.printWelcome();
    await this.setDate();
    await this.setOrder();
  }
  async previewResult() {
    OutputView.printPreview(this.#date);
    // await this.beforeEvent();
    // await afterEvent();
  }

  async setDate() {
    try {
      const inputDate = await InputView.readDate();
      this.#validateDateInput(inputDate);
      this.#date = inputDate;
    } catch (error) {
      OutputView.printError(error);
      await this.setDate();
    }
  }

  #validateDateInput(date) {
    CommonValidator.validate(date);
    DateValidator.validate(date);
  }

  async setOrder() {
    try {
      const input = await InputView.readMenu();
      const menuListArr = this.splitInputMenu(input);
      this.#validateOrderInput(menuListArr);
      this.#myOrders.createMyOrder(menuListArr);
    } catch (error) {
      OutputView.printError(error);
      await this.setOrder();
    }
  }

  splitInputMenu(input) {
    if (!input) {
      CommonValidator.validate(input);
    }
    const menuListArr = input.split(',').map((menu) => {
      return menu.split('-');
    });
    menuListArr.forEach((menuArr) => {
      menuArr[1] = Number(menuArr[1]);
    });
    return menuListArr;
  }

  #validateOrderInput(menuListArr) {
    OrderFormValidator.validate(menuListArr);
  }
}

export default EventPlanner;
