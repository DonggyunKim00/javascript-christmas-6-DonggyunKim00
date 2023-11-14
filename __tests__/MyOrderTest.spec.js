import Menu from '../src/model/Menu.js';
import MyOrder from '../src/model/MyOrder.js';

describe('MyOrder 클래스 테스트', () => {
  test('입력받은 메뉴의 정보와 갯수를 나의 주문목록에 담는다.', async () => {
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
});
