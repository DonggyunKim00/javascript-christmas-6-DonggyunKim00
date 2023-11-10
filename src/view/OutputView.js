import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constant/message.js';

const OutputView = {
  printError(errorMessage) {
    Console.print(errorMessage);
  },

  printWelcome() {
    Console.print(OUTPUT_MESSAGE.OUTPUT_WELCOME_MESSAGE);
  },

  printPreview(date) {
    Console.print(OUTPUT_MESSAGE.OUTPUT_EVENT_PREVIEW_MESSAGE(date));
  },

  printMyOrderMenu(myOrders) {
    Console.print(OUTPUT_MESSAGE.OUTPUT_ORDER_MENU_TITLE);
    for (let i = 0; i < myOrders.length; i++) {
      const name = myOrders[i].menuInfo.name;
      const amount = myOrders[i].amount;
      Console.print(OUTPUT_MESSAGE.OUTPUT_EACH_ORDER_MENU(name, amount));
    }
  },

  printTotalPayBeforeEvent(money) {
    Console.print(OUTPUT_MESSAGE.OUTPUT_BEFOR_DISCOUNT_TOTAL_PAY_TITLE);
    Console.print(OUTPUT_MESSAGE.OUTPUT_TOTAL_MONEY(money));
  },
};

export default OutputView;
