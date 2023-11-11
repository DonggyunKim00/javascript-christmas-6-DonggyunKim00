import { EVENTDAY } from '../db/data.js';

class ChristmasEvent {
  #applyEventObj = {
    dday: 0,
    weekdays: 0,
    weekends: 0,
    special: 0,
    giveaway: 0,
  };

  ddayEvent(date) {
    if (date >= 1 && date <= 25)
      this.#applyEventObj.dday = 1000 + (date - 1) * 100;
  }

  weekdaysEvent(date, myOrderList) {
    if (EVENTDAY.weekdaysEvent.some((day) => day === date)) {
      let dessertCount = 0;
      myOrderList.forEach((menu) => {
        if (menu.menuInfo.category === '디저트') dessertCount += menu.amount;
      });
      this.#applyEventObj.weekdays = 2023 * dessertCount;
    }
  }

  weekendsEvent(date, myOrderList) {
    if (EVENTDAY.weekendsEvent.some((day) => day === date)) {
      let mainCount = 0;
      myOrderList.forEach((menu) => {
        if (menu.menuInfo.category === '메인') mainCount += menu.amount;
      });
      this.#applyEventObj.weekends = 2023 * mainCount;
    }
  }

  specialEvent(date) {
    if (EVENTDAY.specialEvent.some((day) => day === date)) {
      this.#applyEventObj.special = 1000;
    }
  }

  giveawayEvent(totalPayBeforeEvent) {
    if (totalPayBeforeEvent > 120000) this.#applyEventObj.giveaway = 25000;
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
