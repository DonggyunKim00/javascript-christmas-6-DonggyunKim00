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

  printNoneMatchEvent() {
    Console.print(OUTPUT_MESSAGE.OUTPUT_NONE_MATCH);
  },

  printGivingAwayEvent(christmasEvent) {
    Console.print(OUTPUT_MESSAGE.OUTPUT_GIVING_MENU_TITLE);
    christmasEvent.getApplyEventObj().giveaway !== 0
      ? Console.print(OUTPUT_MESSAGE.OUTPUT_EACH_ORDER_MENU('샴페인', 1))
      : this.printNoneMatchEvent();
  },

  printBenefitList(christmasEvent) {
    Console.print(OUTPUT_MESSAGE.OUTPUT_BENEFIT_LIST_TITLE);
    if (christmasEvent.isAllZero()) this.printNoneMatchEvent();
    else this.printBenefitHistory(christmasEvent);
  },

  printBenefitHistory(christmasEvent) {
    const myBenefitArr = christmasEvent.translateArr();
    for (let i = 0; i < myBenefitArr.length; i++) {
      if (myBenefitArr[i][1] !== 0) {
        Console.print(
          `${OUTPUT_MESSAGE.OUTPUT_BENEFIT_LIST(
            myBenefitArr[i][0],
          )}${OUTPUT_MESSAGE.OUTPUT_DISCOUNT_MONEY(myBenefitArr[i][1])}`,
        );
      }
    }
  },

  printTotalBenefit(christmasEvent) {
    Console.print(OUTPUT_MESSAGE.OUTPUT_TOTAL_BENEFIT_TITLE);
    Console.print(
      OUTPUT_MESSAGE.OUTPUT_DISCOUNT_MONEY(christmasEvent.getSumAllBenefit()),
    );
  },

  printTotalPayAfterEvent(myOrders, christmasEvent) {
    const expectPay =
      myOrders.getTotalMyOrderMoney() - christmasEvent.getSumRemoveGiveaway();
    Console.print(OUTPUT_MESSAGE.OUTPUT_AFTER_DISCOUNT_TOTAL_TITLE);
    Console.print(OUTPUT_MESSAGE.OUTPUT_TOTAL_MONEY(expectPay));
  },

  printEventBadge(christmasEvent) {
    Console.print(OUTPUT_MESSAGE.OUTPUT_EVENT_BADGE_TITLE);
    const totalBenefit = christmasEvent.getSumAllBenefit();
    if (totalBenefit >= 5000 && totalBenefit < 10000)
      Console.print(OUTPUT_MESSAGE.OUTPUT_BADGE_STAR);
    if (totalBenefit >= 10000 && totalBenefit < 20000)
      Console.print(OUTPUT_MESSAGE.OUTPUT_BADGE_TREE);
    if (totalBenefit >= 20000) Console.print(OUTPUT_MESSAGE.OUTPUT_BADGE_SANTA);
  },
};

export default OutputView;
