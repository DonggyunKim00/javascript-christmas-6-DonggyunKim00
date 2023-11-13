import { Console } from '@woowacourse/mission-utils';
import { ARR_INDEX, PRICE } from '../constant/constant.js';
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

  // <주문 메뉴> 출력
  printMyOrderMenu(myOrders) {
    Console.print(OUTPUT_MESSAGE.OUTPUT_ORDER_MENU_TITLE);
    for (let i = 0; i < myOrders.length; i++) {
      const name = myOrders[i].menuInfo.name;
      const amount = myOrders[i].amount;
      Console.print(OUTPUT_MESSAGE.OUTPUT_EACH_ORDER_MENU(name, amount));
    }
  },

  // <할인 전 총 주문 금액> 출력
  printTotalPayBeforeEvent(money) {
    Console.print(OUTPUT_MESSAGE.OUTPUT_BEFOR_DISCOUNT_TOTAL_PAY_TITLE);
    Console.print(OUTPUT_MESSAGE.OUTPUT_TOTAL_MONEY(money.toLocaleString()));
  },

  // '없음' 출력
  printNoneMatchEvent() {
    Console.print(OUTPUT_MESSAGE.OUTPUT_NONE_MATCH);
  },

  // <증정 메뉴> 출력
  printGivingAwayEvent(christmasEvent) {
    Console.print(OUTPUT_MESSAGE.OUTPUT_GIVING_MENU_TITLE);
    christmasEvent.getMyBenefit().giveaway !== 0
      ? Console.print(OUTPUT_MESSAGE.OUTPUT_EACH_ORDER_MENU('샴페인', 1))
      : this.printNoneMatchEvent();
  },

  // <혜택 내역 출력>
  printBenefitList(christmasEvent) {
    Console.print(OUTPUT_MESSAGE.OUTPUT_BENEFIT_LIST_TITLE);
    if (christmasEvent.isAllZero()) this.printNoneMatchEvent();
    else this.printBenefitHistory(christmasEvent);
  },
  printBenefitHistory(christmasEvent) {
    const myBenefitArr = christmasEvent.translateArr();
    for (let i = 0; i < myBenefitArr.length; i++) {
      if (myBenefitArr[i][ARR_INDEX.BEMEFIT_VALUES_INDEX] !== 0) {
        Console.print(
          `${OUTPUT_MESSAGE.OUTPUT_BENEFIT_LIST(
            myBenefitArr[i][ARR_INDEX.BENIFIT_LIST_TYPE_INDEX],
          )}${OUTPUT_MESSAGE.OUTPUT_DISCOUNT_MONEY(
            myBenefitArr[i][ARR_INDEX.BEMEFIT_VALUES_INDEX].toLocaleString(),
          )}`,
        );
      }
    }
  },

  // <총혜택 금액> 출력
  printTotalBenefit(christmasEvent) {
    Console.print(OUTPUT_MESSAGE.OUTPUT_TOTAL_BENEFIT_TITLE);
    Console.print(
      OUTPUT_MESSAGE.OUTPUT_DISCOUNT_MONEY(
        christmasEvent.getSumAllBenefit().toLocaleString(),
      ),
    );
  },

  // <할인 후 예상 결제 금액> 출력
  printTotalPayAfterEvent(myOrders, christmasEvent) {
    const expectPay =
      myOrders.getTotalMyOrderMoney() - christmasEvent.getSumRemoveGiveaway();
    Console.print(OUTPUT_MESSAGE.OUTPUT_AFTER_DISCOUNT_TOTAL_TITLE);
    Console.print(
      OUTPUT_MESSAGE.OUTPUT_TOTAL_MONEY(expectPay.toLocaleString()),
    );
  },

  // <12월 이벤트 배지> 출력
  printEventBadge(christmasEvent) {
    Console.print(OUTPUT_MESSAGE.OUTPUT_EVENT_BADGE_TITLE);
    const totalBenefit = christmasEvent.getSumAllBenefit();
    if (totalBenefit >= PRICE.STAR_MIN && totalBenefit < PRICE.STAR_MAX)
      Console.print(OUTPUT_MESSAGE.OUTPUT_BADGE_STAR);
    if (totalBenefit >= PRICE.TREE_MIN && totalBenefit < PRICE.TREE_MAX)
      Console.print(OUTPUT_MESSAGE.OUTPUT_BADGE_TREE);
    if (totalBenefit >= PRICE.SANTA_MIN)
      Console.print(OUTPUT_MESSAGE.OUTPUT_BADGE_SANTA);
  },
};

export default OutputView;
