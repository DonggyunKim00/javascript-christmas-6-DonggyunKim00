import { ERROR_MESSAGE } from '../src/constant/message.js';
import Menu from '../src/model/Menu.js';
import MyOrder from '../src/model/MyOrder.js';

describe('MyOrder 클래스 테스트', () => {
  test('입력받은 메뉴의 정보와 갯수를 나의 주문목록에 담는다.', () => {
    // given
    const menuListArr = [
      ['해산물파스타', 2],
      ['바비큐립', 1],
      ['레드와인', 1],
      ['아이스크림', 3],
    ];

    // when
    const myOrders = new MyOrder(menuListArr);

    // then
    const expected = [
      new Menu('해산물파스타', 2),
      new Menu('바비큐립', 1),
      new Menu('레드와인', 1),
      new Menu('아이스크림', 3),
    ];

    expect(myOrders.getMyOrderList()).toEqual(expected);
  });

  test('이벤트 적용 전 총 주문 금액을 계산한다.', () => {
    // given
    const menuListArr = [
      ['해산물파스타', 2],
      ['바비큐립', 1],
      ['레드와인', 1],
      ['아이스크림', 3],
    ];

    // when
    const myOrders = new MyOrder(menuListArr);

    // then
    const expected = 35000 * 2 + 54000 * 1 + 60000 * 1 + 5000 * 3;

    expect(myOrders.getTotalMyOrderMoney()).toEqual(expected);
  });
  test('이벤트가 적용되는지 불리언값을 리턴한다.', () => {
    // given
    const givenList = [
      [
        ['아이스크림', 1],
        ['제로콜라', 1],
      ],
      [
        ['해산물파스타', 2],
        ['바비큐립', 1],
        ['레드와인', 1],
        ['아이스크림', 3],
      ],
    ];

    // when
    const myOrders = givenList.map((myOrderList) => {
      return new MyOrder(myOrderList).isApplyEvent();
    });

    // then
    expect(myOrders).toEqual([false, true]);
  });
});

describe('예외 처리 테스트', () => {
  test('주문 입력을 받을때, 음료수만 주문한다면 예외처리한다.', () => {
    // given
    const menuListArr = [
      ['레드와인', 3],
      ['제로콜라', 1],
    ];

    // when
    const error = () => {
      try {
        const myOrders = new MyOrder(menuListArr);
      } catch (err) {
        return err;
      }
    };

    // then
    expect(error()).toEqual(ERROR_MESSAGE.INVALID_ONLY_DRINK);
  });
});
