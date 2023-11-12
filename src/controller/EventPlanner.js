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
  #myOrders = new MyOrder();
  #christmasEvent = new ChristmasEvent();

  // 날짜 및 메뉴 입력받기
  async init() {
    OutputView.printWelcome();
    await this.setDate();
    await this.setOrder();
  }
  // 입력받은 내용에대한 이벤트 적용 전,후 결과 출력
  async previewResult() {
    OutputView.printPreview(this.#date);
    await this.beforeEvent();
    await this.afterEvent();
  }

  async setDate() {
    try {
      const inputDate = await InputView.readDate();
      this.#validateDateInput(inputDate);
      this.#date = Number(inputDate);
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

  async beforeEvent() {
    const myOrders = this.#myOrders.getMyOrderList();
    const totalPayBeforeEvent = this.#myOrders.getTotalMyOrderMoney();
    OutputView.printMyOrderMenu(myOrders);
    OutputView.printTotalPayBeforeEvent(totalPayBeforeEvent);
  }
  async afterEvent() {
    this.applyEvent();
    OutputView.printGivingAwayEvent(this.#christmasEvent);
    OutputView.printBenefitList(this.#christmasEvent);
    OutputView.printTotalBenefit(this.#christmasEvent);
    OutputView.printTotalPayAfterEvent(this.#myOrders, this.#christmasEvent);
    OutputView.printEventBadge(this.#christmasEvent);
  }

  applyEvent() {
    const myOrderList = this.#myOrders.getMyOrderList();
    const totalPayBeforeEvent = this.#myOrders.getTotalMyOrderMoney();
    if (this.#myOrders.isApplyEvent()) {
      this.#christmasEvent.giveawayEvent(totalPayBeforeEvent);
      this.#christmasEvent.ddayEvent(this.#date);
      this.#christmasEvent.specialEvent(this.#date);
      this.#christmasEvent.weekdaysEvent(this.#date, myOrderList);
      this.#christmasEvent.weekendsEvent(this.#date, myOrderList);
    }
  }
}

export default EventPlanner;
