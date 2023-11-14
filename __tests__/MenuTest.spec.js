import { ERROR_MESSAGE } from '../src/constant/message';
import Menu from '../src/model/Menu';

describe('Menu 클래스 테스트', () => {
  test('입력받은 메뉴가 메뉴판에 있을때, 주문받은 메뉴정보를 생성한다.', () => {
    // give
    const validInput = ['해산물파스타', 7];

    // when
    const menu = Menu.create(validInput[0], validInput[1]);

    // then
    const expectedMenuInfo = {
      category: '메인',
      name: '해산물파스타',
      price: 35000,
    };
    const expectedAmount = 7;

    expect(menu.menuInfo).toEqual(expectedMenuInfo);
    expect(menu.amount).toEqual(expectedAmount);
  });
});

describe('예외처리 테스트', () => {
  test('입력받은 메뉴가 메뉴판에 없을때, 예외처리한다.', () => {
    // give
    const invalidInput = [
      ['우테코파스타', 3],
      ['해물찜', 7],
      ['제로사이다', 1],
    ];

    const errors = invalidInput.map((input) => {
      try {
        // when
        Menu.create(input[0], input[1]);
        return true;
      } catch (err) {
        // then
        return err;
      }
    });

    expect(errors).toEqual([
      ERROR_MESSAGE.INVALID_EXIST_MENU,
      ERROR_MESSAGE.INVALID_EXIST_MENU,
      ERROR_MESSAGE.INVALID_EXIST_MENU,
    ]);
  });
});
