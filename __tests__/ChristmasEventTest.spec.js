import ChristmasEvent from '../src/model/ChristmasEvent';
import MyOrder from '../src/model/MyOrder';

const giveMyOrderProp = (date, myOrderList) => {
  return {
    day: date,
    order: new MyOrder(myOrderList),
  };
};
describe('ChristmasEventTest 클래스 테스트', () => {
  test('날짜와 주문에 따라 이벤트를 적용한다.', () => {
    // give
    const give = [
      giveMyOrderProp(3, [
        ['아이스크림', 1],
        ['티본스테이크', 1],
      ]),
      giveMyOrderProp(24, [
        ['해산물파스타', 4],
        ['티본스테이크', 2],
        ['레드와인', 1],
      ]),
      giveMyOrderProp(29, [
        ['해산물파스타', 2],
        ['초코케이크', 2],
        ['레드와인', 1],
      ]),
    ];

    // when
    const giveawayBenefitArr = give.map((item) => {
      const christmasEvent = new ChristmasEvent(item.day, item.order);
      return christmasEvent.getMyBenefit();
    });

    // then
    const expected = [
      { dday: 1200, giveaway: 0, special: 1000, weekdays: 2023, weekends: 0 },
      {
        dday: 3300,
        giveaway: 25000,
        special: 1000,
        weekdays: 0,
        weekends: 0,
      },
      {
        dday: 0,
        giveaway: 25000,
        special: 0,
        weekdays: 0,
        weekends: 4046,
      },
    ];

    expect(giveawayBenefitArr).toEqual(expected);
  });

  test('혜택 적용 유무에따라 불리언값을 리턴한다.', () => {
    // give
    const give = [
      giveMyOrderProp(3, [
        ['아이스크림', 1],
        ['제로콜라', 1],
      ]),
      giveMyOrderProp(24, [
        ['해산물파스타', 4],
        ['티본스테이크', 2],
        ['레드와인', 1],
      ]),
      giveMyOrderProp(29, [
        ['해산물파스타', 2],
        ['초코케이크', 2],
        ['레드와인', 1],
      ]),
    ];

    // when
    const giveawayBenefitArr = give.map((item) => {
      const christmasEvent = new ChristmasEvent(item.day, item.order);
      return christmasEvent.isAllZero();
    });

    // then
    const expected = [true, false, false];

    expect(giveawayBenefitArr).toEqual(expected);
  });

  test('총 혜택 금액을 계산한다.', () => {
    // give
    const give = [
      giveMyOrderProp(3, [
        ['아이스크림', 1],
        ['제로콜라', 1],
      ]),
      giveMyOrderProp(16, [
        ['티본스테이크', 2],
        ['샴페인', 2],
      ]),
      giveMyOrderProp(24, [
        ['해산물파스타', 2],
        ['초코케이크', 2],
        ['레드와인', 1],
      ]),
    ];

    // when
    const sumAllBenefitArr = give.map((item) => {
      const christmasEvent = new ChristmasEvent(item.day, item.order);
      return christmasEvent.getSumAllBenefit();
    });

    // then
    const expected = [0, 31546, 33346];

    expect(sumAllBenefitArr).toEqual(expected);
  });
});
