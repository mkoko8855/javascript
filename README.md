\\<!-- 주석(마크다운의 주석이다) -->



\\<!-- html에서 제목은 h1, h2 이런식이었지? -->
\\<!-- 마크다운에서는 # 제목1, ## 제목2 이런 식이다.-->

# 제목 1 (h1)
## 제목 2 (h2)
### 제목 3 (h3)
#### 제목 4 (h4)
##### 제목 5 (h5)
###### 제목 6 (h6)




https://dillinger.io/ 여기 사이트가서 하면됨.
그리고
https://github.com/kyechan99/capsule-render 가면
깃허브주소로가지는데, 그 사람이 제공하는 라이브러리를 이용할 수 있다. 이 페이지는 상단의 헤더를 꾸밀 수 있는 레파지토리이다.


https://shields.io/ 라는 홈페이지 가면,
뱃지도 적용할 수 있다. 

https://simpleicons.org/
아이콘도 적용할 수 있다.




강조 : 이탤릭체는 *(즉, asterisks)* 혹은 _(즉, 언더바)_

두꺼운 글씨는 **(즉, 별2개)** 혹은 _언더바두개_

취소선은 ~~물결 두개~~ 를 사용

<u>밑줄</u> 긋기


1. 순서가 필요한 목록
1. 순서가 필요한 목록
    - 순서가 필요하지 않은 목록(서브)
    - 순서가 필요하지 않은 목록(서브)
- 순서가 필요하지 않은 목록
    - 순서가 필요하지 않은 목록(서브)
    - 순서가 필요하지 않은 목록(서브)

1. 순서가 필요한 목록
    1. 순서가 필요한 목록(서브)
    1. 순서가 필요한 목록(서브)
    1. 순서가 필요한 목록(서브)



[NAVER](https://www.naver.com)
[GOOGLD](https://www.google.com "링크 설명(title) 작성")



[GitHub][1]

문서 안에서 [참조 링크] 를 그대로 사용하는 것도 가능합니다.
[1]: http://github.com/mkoko8855
[참조 링크]: https://www.naver.com



이미지 달기
이미지는 우클릭 > 이미지 주소 복사를 클릭해서 하자
![대체 텍스트를 작성합니다!](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLGKB2qidwMzHO1bvTY1kzWC8kEURXo8cYbYja9v3fFzpV8o135IPVeonviMYXD3Vvyc&usqp=CAU "그림 설명입니다.")



```
$button.addEventListener('click', function () {
  if ($textinput.value === '') {
    alert('충전 금액을 입력해 주세요.');
  } else {
    if (isNaN($textinput.value)) {
      alert('금액이 잘못되었습니다.');
      $textinput.value = '';
      return;
    } else {
      total += Number($textinput.value);
      $textinput.value = '';
      $textinput2.value = total + ' 원';
    }
  }
});
```






수평선긋기

---



별3개로도 가능

***


언더바도가능
___





표 만들기도 가능

|번호|이름|나이|
|---|---|---|





|번호|이름|나이|
|---|---|---|
|1|홍길동|30세|
|2|김철수|25세|
|3|김땡땡|15세|






인용문(blockquote)
> 남의 말이나 다른 글에서 직접 또는 간접적으로 따온 문장.





>>중첩된 인용문
>>>중첩의 중첩된 인용문
>>>중첩의 중첩된 인용문












깃허브 페이지 만들기
mkoko8855.github.io 로 레파티토리만들고
빈폴더 하나 만들고 푸쉬(예를들어업다운게임)해서 깃와서 settings로와서 왼쪽에 pagings 누르고
Branch를 master로바꿔주고 root도체크하고 Save누르자
다음으로 위로 가서 visit site 를 누르자. 
5분~10분뒤에 확인 가능하다.