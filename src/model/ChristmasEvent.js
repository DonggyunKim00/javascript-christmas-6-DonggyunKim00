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
}

export default ChristmasEvent;
