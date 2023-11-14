import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/constant/message.js';
import EventPlanner from '../src/controller/EventPlanner.js';
import MyOrder from '../src/model/MyOrder.js';
import CommonValidator from '../src/validator/CommonValidator.js';
import DateValidator from '../src/validator/DateValidator.js';
import OrderFormValidator from '../src/validator/OrderFormValidator.js';

const mockQuestion = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs);
  });
};

describe('EventPlanner 클래스 테스트', () => {
  test('날짜 정상 입력일때, 날짜를 저장한다.', async () => {
    // given
    mockQuestion('3');

    // when
    const eventPlanner = new EventPlanner();
    const date = await eventPlanner.setDate();

    // then
    const expected = 3;

    expect(date).toEqual(expected);
  });

  test('주문 형식 정상 입력일때, 주문 목록을 생성시도한다.', async () => {
    // // given
    mockQuestion('해산물파스타-1,레드와인-2,초코케이크-1');

    // // when
    const eventPlanner = new EventPlanner();
    const myOrders = await eventPlanner.setOrder();

    // // then
    const menuListArr = eventPlanner.splitInputMenu(
      '해산물파스타-1,레드와인-2,초코케이크-1',
    );
    const expected = new MyOrder(menuListArr);

    expect(myOrders).toEqual(expected);
  });
});

describe('예외 처리 테스트', () => {
  test('빈 값이 입력되면 예외처리한다.', async () => {
    // given
    const emptyInput = '';

    try {
      // when
      CommonValidator.validate(emptyInput);
    } catch (err) {
      // then
      expect(err).toEqual(ERROR_MESSAGE.INVALID_INPUT_EMPTY);
    }
  });

  test('날짜 입력을 받을때, 숫자가 아니라면 예외처리한다.', async () => {
    // given
    const invalidInput = ['a', '1a', '1 a'];

    // when
    const errors = invalidInput.map((input) => {
      try {
        DateValidator.validate(input);
      } catch (err) {
        return err;
      }
    });

    // then
    expect(errors).toEqual([
      ERROR_MESSAGE.INVALID_INPUT_DATE,
      ERROR_MESSAGE.INVALID_INPUT_DATE,
      ERROR_MESSAGE.INVALID_INPUT_DATE,
    ]);
  });

  test('날짜 입력을 받을때, 1~31 사이의 번호를 벗어나면 예외처리한다.', async () => {
    // given
    const invalidInput = ['0', '32', '1000'];

    // when
    const errors = invalidInput.map((input) => {
      try {
        DateValidator.validate(input);
      } catch (err) {
        return err;
      }
    });

    // then
    expect(errors).toEqual([
      ERROR_MESSAGE.INVALID_DATE_RANGE,
      ERROR_MESSAGE.INVALID_DATE_RANGE,
      ERROR_MESSAGE.INVALID_DATE_RANGE,
    ]);
  });

  test('주문입력 폼 예외처리테스트.', async () => {
    // given
    const invalidInput = [
      '해산물파스타--1,제로콜라-3',
      '제로콜라-4,초코케이크=3',
      ',,해산물파스타-3',
      '제로콜라-1,초코케이크-0',
      '해산물파스타-,초코케이크-3',
      '해산물파스타-1,초코케이크-3,제로콜라-1,제로콜라-3',
    ];

    // when
    const eventPlanner = new EventPlanner();
    const errors = invalidInput.map((input) => {
      try {
        OrderFormValidator.validate(eventPlanner.splitInputMenu(input));
      } catch (err) {
        return err;
      }
    });

    // then
    expect(errors).toEqual([
      ERROR_MESSAGE.INVALID_INPUT_ORDER,
      ERROR_MESSAGE.INVALID_INPUT_ORDER,
      ERROR_MESSAGE.INVALID_INPUT_ORDER,
      ERROR_MESSAGE.INVALID_MENU_AMOUNT,
      ERROR_MESSAGE.INVALID_MENU_AMOUNT,
      ERROR_MESSAGE.INVALID_MENU_UNIQUE,
    ]);
  });
});
