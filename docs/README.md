# 기능명세서(MVC모델 적용)

### [Model]MyOrder

- 멤버변수
  - myOrderList(나의 모든 주문 목록)
  - totalOrderMoney(총 주문 금액)
- [v] : 메뉴 추가
  - 주문 목록 유효성 검사
- [ ] : 주문 목록 반환
- [ ] : 총 주문 금액 반환
- [ ] : 총 주문 금액 계산

### [Model]Menu

- 멤버변수
  - menuInfo(db에 저장된 메뉴 정보)
  - amount(메뉴 갯수)
- [v] : 생성자 함수
  - 메뉴 유효성 검사
- [v] : 메뉴 생성
- [ ] : 메뉴 정보 반환

### [Model]ChirstmasEvent

- [ ] : 총주문 금액 10,000원 이상부터 이벤트가 적용
- [ ] : dDayEvent
  - 이벤트 기간: 2023.12.1 ~ 2023.12.25
  - 1000원 시작 -> 100원씩 증가 -> 총주문 금액에서 해당 금액만큼 할인
  - (e.g. 시작일인 12월 1일에 1,000원, 2일에 1,100원, ..., 25일엔 3,400원 할인)
- [ ] : weekdaysEvent
  - 이벤트 기간: 2023.12.1 ~ 2023.12.31
  - 일요일 ~ 목요일 적용
  - 디저트 메뉴 1개당 2,023원 할인
- [ ] : weekeendsEvent
  - 이벤트 기간: 2023.12.1 ~ 2023.12.31
  - 금요일,토요일 적용
  - 메인 메뉴를 메뉴 1개당 2,023원 할인
- [ ] : specialEvent
  - 이벤트 기간: 2023.12.1 ~ 2023.12.31
  - 12월 (3,10,17,24,25,31)일 적용
  - 총주문 금액에서 1000원 할인
- [ ] : giveawayEvent
  - 이벤트 기간: 2023.12.1 ~ 2023.12.31
  - 할인 전 총주문 금액이 12만 원 이상일 때, 샴페인 1개 증정

### [View]InputView

- [v] : 예상 방문 날짜 입력
- [v] : 주문할 메뉴와 개수 입력

### [View]OutputView

- [v] : 에러문구 출력
- [v] : welcome 문구 출력
- [v] : 예상 방문 날짜에 따른 문구 출력
- [ ] : 주문 메뉴 출력
- [ ] : 할인 전 총 주문 금액 출력
- [ ] : 증정 메뉴 출력
- [ ] : 혜택 내역 출력
- [ ] : 총혜택 금액 출력 ( = 할인 금액의 합계 + 증정 메뉴의 가격)
- [ ] : 할인 후 예상 결제 금액 출력 ( = 할인 전 총주문 금액 - 할인 금액)
- [ ] : 총혜택 금액에 따른 12월 이벤트 배지 출력

### [Controller]EventPlanner

- 멤버변수
  - date(입력 받은 날짜)
  - totalDiscount(총 할인 금액)
  - totalBenifit(총 혜택 금액)
- [v] : 날짜 및 메뉴 입력받기
  - [v] : welcome 문구 출력
  - [v] : 날짜 입력 받기
  - [v] : 날짜 유효성 검사
  - [v] : 메뉴 입력 받기
  - [v] : MyOrder에 메뉴 추가
- [ ] : 미리보기 결과
  - [ ] : 날짜에따른 미리보기 문구 출력
  - [ ] : 이벤트 적용 전 출력
    - [ ] : 주문 메뉴 출력
    - [ ] : 할인 전 총 주문 금액 출력
  - [ ] : 이벤트 적용 후 출력
    - [ ] : 증정 메뉴 출력
    - [ ] : 혜택 내역 출력
    - [ ] : 총혜택 금액 출력
    - [ ] : 할인 후 예상 결제 금액 출력
    - [ ] : 12월 이벤트 배지 출력

### [utils]validateFn

- CommonValidate
  - [v] : 빈 입력 검사
- OrderFormValidate
  - [v] : 메뉴 입력 형식 검사
  - [v] : 메뉴 중복 검사
  - [v] : 메뉴 갯수 검사
- MenuValidate
  - [v] : 메뉴 유무 검사
- MyOrderValidate
  - [v] : 음료만 주문 검사
  - [v] : 총 주문 메뉴 갯수 검사
- DateValidate
  - [v] : 숫자 검사
  - [v] : 날짜 범위 검사

### [validator]CommonValidator

- [v] : CommonValidate throw문 예외처리

### [validator]DateValidator

- [v] : DateValidate throw문 예외처리

### [validator]OrderFormValidator

- [v] : OrderFormValidate throw문 예외처리

### [validator]MenuValidator

- [v] : MenuValidate throw문 예외처리

### [validator]MyOrderValidator

- [v] : MyOrderValidate throw문 예외처리

### [constant]message

- ERROR_MESSAGE(에러를 관리하는 메시지)
- INPUT_MESSAGE(유저에게 입력받는 메시지)
- OUTPUT_MESSAGE(유저에게 출력하는 메시지)

### [db]data

- MENUS(메뉴 리스트 category,name,price 형식)
