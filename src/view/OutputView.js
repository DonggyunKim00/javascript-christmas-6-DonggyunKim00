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
};

export default OutputView;
