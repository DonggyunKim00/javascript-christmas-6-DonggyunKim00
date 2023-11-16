import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/message.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.INPUT_WHEN_VISIT);
    return input;
  },
  async readMenu() {
    const input = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_MENU_AND_AMOUNT,
    );
    return input;
  },
};

export default InputView;
