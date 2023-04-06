//필요한 데이터: 랜덤 숫자, 횟수카운트, 카운트다운, 최소값, 최대값

//최대범위를 저장할 변수
const MAX = 100;

//게임에 필요한 데이터를 모아놓을 객체
const gameData = {
    secret_num : Math.floor(Math.random()*MAX) + 1,
    count : 0,
    countdown : 6,
    min : 1,
    max : MAX
};

////////////////////////함수 정의부///////////////////////////////

//사용자의 입력을 수행하는 함수
function inputNumber() {

    //객체에서 min과 max의 값을 뽑아서 메세지를 완성.
    //객체 디스트럭쳐링으로 뽑아 보세요~
    //디스트럭쳐링 : 배열이나 객체 안의 어떤 값을 추출할 때 쉽게 받아오는 방법

    const{min, max} = gameData;

    //사용자의 입력값을 객체에 추가
    //프로퍼티동적추가(새로운 키값으로 message를 추가)
    gameData.answer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`); 

    //사용자가 입력하면 게임 데이터의 카운트를 하나씩 올려줄거고
    gameData.count++;
    //카운트다운도 하나씩 내려줄것이다.
    gameData.countdown--;

    //입력값 검증 함수를 호출
    return checkNumber(); //얘가 논리값으로 리턴할꺼고 inputNumber로 리턴을하고 맨아래 while이 돌아갈지말지 선택할듯
};




//사용자의 입력값을 검증하는 함수(논리값을 주는 checkNumber)
function checkNumber() {

    const{secret_num, count, answer, countdown} = gameData; //게임데이터에서 다 가지고올 것이다.

    if(secret_num === answer){
        alert('정답입니다!' + count + ' 번 만에 맞추셨네요!');
        //게임에서 이겼냐졌냐를 불러줄꺼야
        checkCountDown(countdown); 
        //그리고 게임을 종료하기 위해 리턴 트루
        return true;
    } else if(secret_num > answer){
        alert('UP!!!');
        //그리고 이제 사용자가 입력한 값을 한번 더 언급하면서 더 높은 수로 하라고 말해줄거야
        gameData.min = answer + 1; //50을 입력했는데 더 높은 수가 답이라면, 1~50은 쓸모없는 수니까 51부터 입력하라고 얘기해줄꺼야
    } else {
        alert('DOWN!!!');
        gameData.max = answer - 1;
    }
    //답을 못맞췄을 땐 false를 줘서 맨 아래 와일문이 돌 수 있게끔.
    alertCountDown(countdown);
    return false;
};



//사용자의 카운트다운을 체크하여 승리 여부를 알려주는 함수
function checkCountDown(countdown) {
    if(countdown > 0){
        alert('기회 내에 성공!!');
    }else{
        alert('기회 내에 성공하지 못했어요');
    }
};





//사용자의 남은 카운트다운 횟수를 알려주는 함수
function alertCountDown(countdown) {
     if(countdown > 0){
      alert(`정답 기회 ${countdown}번 남음!`);
    } else{
        //이미 게임졌으니(기회다썼으니)
        alert('정답 기회를 모두 소진했지만 문제는 계속 풀어주세요');
    }
};



// 핵심 실행부 (main의 역할을 하는 함수)
// 즉시 실행 함수로 선언하여 따로 호출하지 않아도
// 바로 실행될 수 있도록 작성. 

(function() {
    alert('[UP & DOWN 게임 - 1 ~ 100 사이의 숫자를 맞춰보세요!]');

    //입력을 담당하는 함수를 호출할 예정
    while(!inputNumber()) {
        // true가 리턴되면 프로그램 종료.
        // false가 리턴되면 게임 계속 진행. 
    }
}()); 