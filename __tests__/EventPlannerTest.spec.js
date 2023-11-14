import { MissionUtils } from '@woowacourse/mission-utils';
import EventPlanner from '../src/controller/EventPlanner.js';
import MyOrder from '../src/model/MyOrder.js';

const mockQuestion = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs);
  });
};

describe('날짜 입력', () => {
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
