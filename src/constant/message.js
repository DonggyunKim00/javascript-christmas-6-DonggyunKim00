export const ERROR_MESSAGE = Object.freeze({
  INVALID_INPUT_DATE: '[ERROR] 유효하지 않은 날짜입니다.다시 입력해 주세요.\n',
  INVALID_INPUT_ORDER: '[ERROR] 유효하지 않은 주문입니다.다시 입력해 주세요.\n',
  INVALID_MENU_AMOUNT:
    '[ERROR] 각 메뉴는 1개 이상 주문해야합니다.다시 입력해 주세요.\n',
  INVALID_TOTAL_MENU_COUNT:
    '[ERROR] 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.다시 입력해 주세요.\n',
  INVALID_MENU_UNIQUE: '[ERROR] 메뉴가 중복되었습니다.다시 입력해 주세요.\n',
  INVALID_EXIST_MENU: '[ERROR] 없는 메뉴입니다.다시 입력해 주세요.\n',
  INVALID_ONLY_DRINK: '[ERROR] 음료만 주문할 수 없습니다.다시 입력해 주세요.\n',
  INVALID_INPUT_EMPTY: '[ERROR] 값을 입력해주세요.\n',
  INVALID_DATE_RANGE: '[ERROR] 1~31 사이의 값을 입력해주세요.\n',
});

export const INPUT_MESSAGE = Object.freeze({
  INPUT_WHEN_VISIT:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  INPUT_MENU_AND_AMOUNT:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  OUTPUT_WELCOME_MESSAGE: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  OUTPUT_EVENT_PREVIEW_MESSAGE: (date) =>
    `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  OUTPUT_ORDER_MENU_TITLE: '\n<주문 메뉴>',
  OUTPUT_BEFOR_DISCOUNT_TOTAL_PAY_TITLE: '\n<할인 전 총주문 금액>',
  OUTPUT_GIVING_MENU_TITLE: '\n<증정 메뉴>',
  OUTPUT_BENEFIT_LIST_TITLE: '\n<혜택 내역>',
  OUTPUT_TOTAL_BENEFIT_TITLE: '\n<총혜택 금액>',
  OUTPUT_AFTER_DISCOUNT_TOTAL_TITLE: '\n<할인 후 예상 결제 금액>',
  OUTPUT_EVENT_BADGE_TITLE: '\n<12월 이벤트 배지>',
  OUTPUT_NONE_MATCH: '없음',
  OUTPUT_TOTAL_MONEY: (money) => `${money}원`,
  OUTPUT_DISCOUNT_MONEY: (money) => `-${money}원`,
  OUTPUT_BENEFIT_LIST: (event) => {
    switch (event) {
      case 'dday':
        return '크리스마스 디데이 할인: ';
      case 'weekdays':
        return '평일 할인: ';
      case 'weekends':
        return '주말 할인: ';
      case 'special':
        return '특별 할인: ';
      case 'giveaway':
        return '증정 이벤트: ';
    }
  },
  OUTPUT_EACH_ORDER_MENU: (name, amount) => `${name} ${amount}개`,
});
