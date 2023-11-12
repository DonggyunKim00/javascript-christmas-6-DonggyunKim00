import { DATE, PRICE } from '../constant/constant.js';
import { EVENTDAY } from '../db/data.js';

/**
 * 이벤트 정의 및 적용된 이벤트 관리 클래스
 */
class ChristmasEvent {
  #applyEventObj = {
    dday: 0,
    weekdays: 0,
    weekends: 0,
    special: 0,
    giveaway: 0,
  };

  ddayEvent(date) {
    if (date >= DATE.FIRST_DAY && date <= DATE.CHRISTMAS_DAY)
      this.#applyEventObj.dday =
        PRICE.DDAY_EVENT_INIT_DISCOUNT +
        (date - 1) * PRICE.DDAY_COUNT_PLUS_DISCOUNT;
  }

  weekdaysEvent(date, myOrderList) {
    if (EVENTDAY.weekdaysEvent.some((day) => day === date)) {
      let dessertCount = 0;
      myOrderList.forEach((menu) => {
        if (menu.menuInfo.category === '디저트') dessertCount += menu.amount;
      });
      this.#applyEventObj.weekdays = PRICE.DESSERT_DISCOUNT * dessertCount;
    }
  }

  weekendsEvent(date, myOrderList) {
    if (EVENTDAY.weekendsEvent.some((day) => day === date)) {
      let mainCount = 0;
      myOrderList.forEach((menu) => {
        if (menu.menuInfo.category === '메인') mainCount += menu.amount;
      });
      this.#applyEventObj.weekends = PRICE.MAIN_DISCOUNT * mainCount;
    }
  }

  specialEvent(date) {
    if (EVENTDAY.specialEvent.some((day) => day === date)) {
      this.#applyEventObj.special = PRICE.SPECIAL_EVENT_DISCOUNT_MOENY;
    }
  }

  giveawayEvent(totalPayBeforeEvent) {
    if (totalPayBeforeEvent > PRICE.GIVEAWAY_EVENT_LIMIT)
      this.#applyEventObj.giveaway = PRICE.CHAMPAGNE_PRICE;
  }

  getApplyEventObj() {
    return this.#applyEventObj;
  }

  isAllZero() {
    return Object.values(this.#applyEventObj).every((value) => value === 0);
  }

  translateArr() {
    return [...Object.entries(this.#applyEventObj)];
  }

  getSumAllBenefit() {
    return Object.values(this.#applyEventObj).reduce(
      (acc, cur) => acc + cur,
      0,
    );
  }

  getSumRemoveGiveaway() {
    const newObj = { ...this.#applyEventObj };
    delete newObj.giveaway;
    return Object.values(newObj).reduce((acc, cur) => acc + cur, 0);
  }
}

export default ChristmasEvent;
