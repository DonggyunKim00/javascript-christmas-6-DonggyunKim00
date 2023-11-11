import { EVENTDAY } from '../db/data.js';

class ChristmasEvent {
  #applyEventObj = {
    dday: 0,
    weekdays: 0,
    weekends: 0,
    specical: 0,
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
        if (menu.menuInfo.category === '디저트') dessertCount++;
      });
      this.#applyEventObj.weekdays = 2023 * dessertCount;
    }
  }

  weekendsEvent(date, myOrderList) {
    if (EVENTDAY.weekendsEvent.some((day) => day === date)) {
      let mainCount = 0;
      myOrderList.forEach((menu) => {
        if (menu.menuInfo.category === '메인') mainCount++;
      });
      this.#applyEventObj.weekends = 2023 * mainCount;
    }
  }

  specialEvent(date) {
    if (EVENTDAY.specialEvent.some((day) => day === date)) {
      this.#applyEventObj.specical = 1000;
    }
  }

  giveawayEvent(totalPayBeforeEvent) {
    if (totalPayBeforeEvent > 120000) this.#applyEventObj.giveaway = 25000;
  }

  getApplyEventObj() {
    return this.#applyEventObj;
  }
}

export default ChristmasEvent;
