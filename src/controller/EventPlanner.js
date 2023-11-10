import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import CommonValidator from '../validator/CommonValidator.js';
import DateValidator from '../validator/DateValidator.js';

class EventPlanner {
  #date;

  /**
   * 날짜 및 메뉴 입력받기
   */
  async init() {
    OutputView.printWelcome();
    await this.setDate();
  }

  async setDate() {
    try {
      const inputDate = await InputView.readDate();
      this.#validateDateInput(inputDate);
      this.#date = inputDate;
    } catch (error) {
      OutputView.printError(error);
      this.setDate();
    }
  }
  #validateDateInput(date) {
    CommonValidator.validate(date);
    DateValidator.validate(date);
  }
}

export default EventPlanner;
