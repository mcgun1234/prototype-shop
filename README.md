# Romie's Music

깃허브 : https://github.com/mcgun1234/prototype-shop

결과물은 http://romiesmusic.store 에서 확인하실 수 있습니다

## 실행방법

Node.js LTS 버전을 이용해야 합니다

### `yarn install`

### `yarn start`

## 프로젝트 설명

### UI 수정

기존의 Prototype-shop 프로젝트에서 버튼등의 UI 디자인을 교체했습니다. 뿐만 아니라 전체적인 UI를 기타를 판매하는 쇼핑몰 디자인으로 교체하였습니다. 아이콘 또한 기타 이미지의 아이콘으로 교체하였습니다.

### 컨텐츠 수정

기존의 상품 목록에서, 제가 1학기때 제작했던 쇼핑몰 기획서와 최대한 비슷하게 제작하게 위하여, 다양한 기타 및 악세서리 등을 상품으로 추가하였습니다.

### 추가한 부분

1. Router 를 사용하여 메인 화면, 주문 페이지, 상품 상세 정보 페이지간 이동을 원활하게 구현하였습니다. 뿐만 아니라 상품 상세정보 페이지를 구현하는 과정에서 Parameter를 사용하여 효율적으로 여러 화면을 구현하였습니다.

2. 주문 페이지까지 구현하였습니다. 장바구니에 상품을 담고 주문하기 버튼을 누르면, 주문 페이지로 이동합니다. 특히 장바구니의 상품 목록과 주문 페이지를 연동하여 주문을 검토하는 부분 (Review your order
   ) 에서 자신이 고른 상품과 개수, 뿐만 아니라 총 가격까지도 볼 수 있습니다.

3. 상품 상세정보 페이지를 추가하였습니다. 이 부분에서 모달을 구현하여 이미지 보기를 토글할 수 있습니다.

4. 뿐만 아니라 각종 버튼들을 이용하여 원활하게 화면간 이동을 할 수 있습니다.
