import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import CommonValidator from '../validator/CommonValidator.js';
import DateValidator from '../validator/DateValidator.js';
import OrderFormValidator from '../validator/OrderFormValidator.js';
import MyOrder from '../model/MyOrder.js';
import ChristmasEvent from '../model/ChristmasEvent.js';
import { ARR_INDEX } from '../constant/constant.js';

class EventPlanner {
  #date;
  #myOrders;

  // 날짜 및 메뉴 입력받기
  async start() {
    OutputView.printWelcome();
    const date = await this.setDate();
    const myOrders = await this.setOrder();
    this.#date = date;
    this.#myOrders = myOrders;
  }
  // 입력받은 내용에대한 이벤트 적용 전,후 결과 출력
  async previewResult() {
    OutputView.printPreview(this.#date);
    await this.beforeEvent();
    await this.afterEvent();
  }

  async setDate() {
    let success = false;
    while (!success) {
      try {
        const inputDate = await InputView.readDate();
        this.#validateDateInput(inputDate);
        success = true;
        return Number(inputDate);
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }
  #validateDateInput(date) {
    CommonValidator.validate(date);
    DateValidator.validate(date);
  }

  async setOrder() {
    let success = false;
    while (!success) {
      try {
        const input = await InputView.readMenu();
        const menuListArr = this.splitInputMenu(input);
        this.#validateOrderInput(menuListArr);
        success = true;
        return new MyOrder(menuListArr);
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }

  // 주문받은 string 메뉴 2차원 배열화
  splitInputMenu(input) {
    if (!input) {
      CommonValidator.validate(input);
    }
    const menuListArr = input.split(',').map((menu) => {
      return menu.split('-');
    });
    menuListArr.forEach((menuArr) => {
      menuArr[ARR_INDEX.MENU_AMOUNT_INDEX] = Number(
        menuArr[ARR_INDEX.MENU_AMOUNT_INDEX],
      );
    });
    return menuListArr;
  }
  #validateOrderInput(menuListArr) {
    OrderFormValidator.validate(menuListArr);
  }

  // 이벤트 적용 전 출력 내용
  async beforeEvent() {
    const myOrders = this.#myOrders.getMyOrderList();
    const totalPayBeforeEvent = this.#myOrders.getTotalMyOrderMoney();
    OutputView.printMyOrderMenu(myOrders);
    OutputView.printTotalPayBeforeEvent(totalPayBeforeEvent);
  }

  // 이벤트 적용 후 출력 내용
  async afterEvent() {
    const christmasEvent = new ChristmasEvent(this.#date, this.#myOrders);
    OutputView.printGivingAwayEvent(christmasEvent);
    OutputView.printBenefitList(christmasEvent);
    OutputView.printTotalBenefit(christmasEvent);
    OutputView.printTotalPayAfterEvent(this.#myOrders, christmasEvent);
    OutputView.printEventBadge(christmasEvent);
  }
}

export default EventPlanner;
