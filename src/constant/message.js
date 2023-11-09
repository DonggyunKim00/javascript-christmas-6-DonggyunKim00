export const ERROR_MESSAGE = Object.freeze({
  INVALID_INPUT_DATE: '[ERROR] 유효하지 않은 날짜입니다.다시 입력해 주세요.',
  INVALID_INPUT_ORDER: '[ERROR] 유효하지 않은 주문입니다.다시 입력해 주세요.',
});

export const INPUT_MESSAGE = Object.freeze({
  INPUT_WHEN_VISIT:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  INPUT_MENU_AND_AMOUNT:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  OUTPUT_WELCOME_MESSAGE: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  OUTPUT_EVENT_PREVIEW_MESSAGE:
    '12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
  OUTPUT_ORDER_MENU_TITLE: '<주문 메뉴>',
  OUTPUT_BEFOR_DISCOUNT_TOTAL_PAY_TITLE: '<할인 전 총주문 금액>',
  OUTPUT_GIVING_MENU_TITLE: '<증정 메뉴>',
  OUTPUT_BENEFIT_LIST_TITLE: '<혜택 내역>',
  OUTPUT_TOTAL_BENEFIT_TITLE: '<총혜택 금액>',
  OUTPUT_AFTER_DISCOUNT_TOTAL_TITLE: '<할인 후 예상 결제 금액>',
  OUTPUT_EVENT_BADGE_TITLE: '<12월 이벤트 배지>',
  OUTPUT_NONE_MATCH: '없음',
  OUTPUT_TOTAL_MONEY: (money) => `${money}원`,
  OUTPUT_DISCOUNT_MONEY: (money) => `-${money}원`,
  OUTPUT_DDAY_DISCOUNT: '크리스마스 디데이 할인: ',
  OUTPUT_WEEKDAYS_DISCOUNT: '평일 할인: ',
  OUTPUT_WEEKENDS_DISCOUNT: '주말 할인: ',
  OUTPUT_SPECIAL_DISCOUNT: '특별 할인: ',
  OUTPUT_GIVING_EVENT: '증정 이벤트: ',
  OUTPUT_ONE_BOTTOLE_CHAMPAGNE: '샴페인 1개',
});
