import { MissionUtils } from '@woowacourse/mission-utils';
import EventPlanner from '../src/controller/EventPlanner.js';

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
});
