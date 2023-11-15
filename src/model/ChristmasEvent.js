import { DATE, PRICE } from '../constant/constant.js';
import { EVENTDAY } from '../db/data.js';

/**
 * 이벤트 정의 및 적용된 이벤트 관리 클래스
 */
class ChristmasEvent {
  #myBenefit = {
    dday: 0,
    weekdays: 0,
    weekends: 0,
    special: 0,
    giveaway: 0,
  };

  constructor(date, myOrders) {
    this.#applyEvent(date, myOrders);
  }

  #ddayEvent(date) {
    if (date >= DATE.FIRST_DAY && date <= DATE.CHRISTMAS_DAY)
      this.#myBenefit.dday =
        PRICE.DDAY_EVENT_INIT_DISCOUNT +
        (date - 1) * PRICE.DDAY_COUNT_PLUS_DISCOUNT;
  }

  #weekdaysEvent(date, myOrderList) {
    if (EVENTDAY.weekdaysEvent.some((day) => day === date)) {
      let dessertCount = 0;
      myOrderList.forEach((menu) => {
        if (menu.menuInfo.category === '디저트') dessertCount += menu.amount;
      });
      this.#myBenefit.weekdays = PRICE.DESSERT_DISCOUNT * dessertCount;
    }
  }

  #weekendsEvent(date, myOrderList) {
    if (EVENTDAY.weekendsEvent.some((day) => day === date)) {
      let mainCount = 0;
      myOrderList.forEach((menu) => {
        if (menu.menuInfo.category === '메인') mainCount += menu.amount;
      });
      this.#myBenefit.weekends = PRICE.MAIN_DISCOUNT * mainCount;
    }
  }

  #specialEvent(date) {
    if (EVENTDAY.specialEvent.some((day) => day === date)) {
      this.#myBenefit.special = PRICE.SPECIAL_EVENT_DISCOUNT_MOENY;
    }
  }

  #giveawayEvent(totalPayBeforeEvent) {
    if (totalPayBeforeEvent > PRICE.GIVEAWAY_EVENT_LIMIT)
      this.#myBenefit.giveaway = PRICE.CHAMPAGNE_PRICE;
  }

  getMyBenefit() {
    return this.#myBenefit;
  }

  isAllZero() {
    return Object.values(this.#myBenefit).every((value) => value === 0);
  }

  translateArr() {
    return [...Object.entries(this.#myBenefit)];
  }

  getSumAllBenefit() {
    return Object.values(this.#myBenefit).reduce((acc, cur) => acc + cur, 0);
  }

  getSumRemoveGiveaway() {
    const newObj = { ...this.#myBenefit };
    delete newObj.giveaway;
    return Object.values(newObj).reduce((acc, cur) => acc + cur, 0);
  }

  #applyEvent(date, myOrders) {
    if (myOrders.isApplyEvent()) {
      this.#giveawayEvent(myOrders.getTotalMyOrderMoney());
      this.#ddayEvent(date);
      this.#specialEvent(date);
      this.#weekdaysEvent(date, myOrders.getMyOrderList());
      this.#weekendsEvent(date, myOrders.getMyOrderList());
    }
  }
}

export default ChristmasEvent;
