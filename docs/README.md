# 📚기능명세서(MVC모델 적용)

### [Model]MyOrder

- 멤버변수
  - myOrderList(나의 모든 주문 목록)
- [x] : 생성자 함수
  - [x] : 메뉴 추가
    - 주문 목록 유효성 검사
- [x] : 주문 목록 반환
- [x] : 총 주문 금액 반환
- [x] : 주문 금액 10000원 넘는지 불리언값 리턴

### [Model]Menu

- 멤버변수
  - menuInfo(db에 저장된 메뉴 정보)
  - amount(메뉴 갯수)
- [x] : 생성자 함수
  - 메뉴 유효성 검사
- [x] : 메뉴 생성

### [Model]ChristmasEvent

- 멤버변수
  - myBenefit(적용된 이벤트들의 할인 값)
- [x] : 생성자 함수
  - 날짜, 주문목록을 토대로 이벤트 적용
- [x] : ddayEvent
  - 이벤트 기간: 2023.12.1 ~ 2023.12.25
  - 1000원 시작 -> 100원씩 증가 -> 총주문 금액에서 해당 금액만큼 할인
  - (e.g. 시작일인 12월 1일에 1,000원, 2일에 1,100원, ..., 25일엔 3,400원 할인)
- [x] : weekdaysEvent
  - 이벤트 기간: 2023.12.1 ~ 2023.12.31
  - 일요일 ~ 목요일 적용
  - 디저트 메뉴 1개당 2,023원 할인
- [x] : weekendsEvent
  - 이벤트 기간: 2023.12.1 ~ 2023.12.31
  - 금요일,토요일 적용
  - 메인 메뉴를 메뉴 1개당 2,023원 할인
- [x] : specialEvent
  - 12월 (3,10,17,24,25,31)일 적용
  - 총주문 금액에서 1000원 할인
- [x] : giveawayEvent
  - 할인 전 총주문 금액이 12만 원 이상일 때, 샴페인 1개 증정
- [x] : applyEventObj 멤버변수 게터
- [x] : 모든 value들이 0인지 확인
- [x] : applyEventObj 2차원 배열로 변경 함수
- [x] : 모든 혜택의 합
- [x] : 모든 할인의 합(증정 이벤트 제외)
- [x] : 모든 이벤트 적용

### [View]InputView

- [x] : 예상 방문 날짜 입력
- [x] : 주문할 메뉴와 개수 입력

### [View]OutputView

- [x] : 에러문구 출력
- [x] : welcome 문구 출력
- [x] : 예상 방문 날짜에 따른 문구 출력
- [x] : 주문 메뉴 출력
- [x] : 할인 전 총 주문 금액 출력
- [x] : 증정 메뉴 출력
- [x] : '없음' 출력
- [x] : 혜택 내역 출력
  - [x] : 혜택 내역의 history 출력
- [x] : 총혜택 금액 출력 ( = 할인 금액의 합계 + 증정 메뉴의 가격)
- [x] : 할인 후 예상 결제 금액 출력 ( = 할인 전 총주문 금액 - 할인 금액)
- [x] : 총혜택 금액에 따른 12월 이벤트 배지 출력

### [Controller]EventPlanner

- 멤버변수
  - date(입력 받은 날짜)
  - myOrders(MyOrder 클래스의 객체)
- [x] : 날짜 및 메뉴 입력받기
  - [x] : welcome 문구 출력
  - [x] : 날짜 입력 받기
  - [x] : 날짜 유효성 검사
  - [x] : 메뉴 입력 받기
  - [x] : MyOrder에 메뉴 추가
- [x] : 미리보기 결과
  - [x] : 날짜에따른 미리보기 문구 출력
  - [x] : 이벤트 적용 전 출력
    - [x] : 주문 메뉴 출력
    - [x] : 할인 전 총 주문 금액 출력
  - [x] : 이벤트 적용 후 출력
    - [x] : 이벤트 적용
    - [x] : 증정 메뉴 출력
    - [x] : 혜택 내역 출력
    - [x] : 총혜택 금액 출력
    - [x] : 할인 후 예상 결제 금액 출력
    - [x] : 12월 이벤트 배지 출력

### [utils]validateFn

- CommonValidate
  - [x] : 빈 입력 검사
- OrderFormValidate
  - [x] : 메뉴 입력 형식 검사
  - [x] : 메뉴 중복 검사
  - [x] : 메뉴 갯수 검사
- MenuValidate
  - [x] : 메뉴 유무 검사
- MyOrderValidate
  - [x] : 음료만 주문 검사
  - [x] : 총 주문 메뉴 갯수 검사
- DateValidate
  - [x] : 숫자 검사
  - [x] : 날짜 범위 검사

### [validator]CommonValidator

- [x] : CommonValidate throw문 예외처리

### [validator]DateValidator

- [x] : DateValidate throw문 예외처리

### [validator]OrderFormValidator

- [x] : OrderFormValidate throw문 예외처리

### [validator]MenuValidator

- [x] : MenuValidate throw문 예외처리

### [validator]MyOrderValidator

- [x] : MyOrderValidate throw문 예외처리

### [constant]message

- ERROR_MESSAGE(에러를 관리하는 메시지)
- INPUT_MESSAGE(유저에게 입력받는 메시지)
- OUTPUT_MESSAGE(유저에게 출력하는 메시지)

### [constant]constant

- PRICE(가격,돈 관련 상수)
- DATE(날짜 관련 상수)
- COUNT(카운팅 관련 상수)
- ARR_INDEX(배열 인덱스에 들어갈 상수)

### [db]data

- MENUS(메뉴 리스트 category,name,price 형식)
- EVENTDAY(이벤트 날짜 모음)

---

# 🛠️테스트 명세서

### EventPlannerTest

- [x] : 날짜 정상 입력일때, 날짜를 저장한다.
- [x] : 주문 형식 정상 입력일때, 주문 목록을 생성시도한다.
- 예외 처리 테스트
  - [x] : 빈 값이 입력되면 예외처리한다.
  - [x] : 날짜 입력을 받을때, 숫자가 아니라면 예외처리한다.
  - [x] : 날짜 입력을 받을때, 1~31 사이의 번호를 벗어나면 예외처리한다.
  - 주문입력 폼 예외처리
    - [x] : 주문 입력을 받을떄, 주문 형식을 벗어나면 예외처리한다.
    - [x] : 주문 입력을 받을때, 메뉴 갯수가 1보다 작다면 예외처리한다.
    - [x] : 주문 입력을 받을때, 메뉴 이름이 중복된다면 예외처리한다.

### MenuTest

- [x] : 입력받은 메뉴가 메뉴판에 있을때, 주문받은 메뉴정보를 생성한다.
- 예외 처리 테스트
  - [x] : 입력받은 메뉴가 메뉴판에 없을때, 예외처리한다.

### MyOrderTest

- [x] : 입력받은 메뉴의 정보와 갯수를 나의 주문목록에 담는다.
- [x] : 이벤트 적용 전 총 주문 금액을 계산한다.
- [x] : 이벤트가 적용되는지 불리언값을 리턴한다.
- 예외 처리 테스트
  - [x] : 주문 입력을 받을때, 음료수만 주문한다면 예외처리한다.
  - [x] : 주문 입력을 받을때, 메뉴의 총 갯수가 20개를 넘어가면 예외처리한다.

### ChristmasEventTest

- [x] : 날짜와 주문에 따라 이벤트를 적용한다.
- [x] : 혜택 적용 유무에따라 불리언값을 리턴한다.
- [x] : 총 혜택 금액을 계산한다.
- [x] : 할인 금액만 계산한다.(증정 이벤트 제외)
