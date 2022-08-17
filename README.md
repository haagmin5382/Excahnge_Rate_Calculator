# 환율 계산기

외부 API를 통해서 환율 정보를 가져와서 화폐별 환율을 계산해주는 계산기입니다.
![exchange_calculator](https://user-images.githubusercontent.com/81218474/185035210-8c600dd1-5af1-45c9-9044-4bafea15d7b7.gif)

## 배포 링크
https://precious-pika-63ce55.netlify.app/
### debounce

리소스 낭비를 줄이기 위해 숫자를 입력할 때 마다 API를 호출하는 것이 아닌 입력 완료 된후 1초 후에 api를 호출 하는 방식으로 debounce를 적용했습니다.

### 화살표 버튼

가운데 있는 화살표 버튼을 누르면 위 아래 환율 입력창이 서로 바뀝니다.
