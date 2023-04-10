//게임에 필요한 데이터 객체
const gameData = {
    //1~100까지 난수
    secret : Math.floor(Math.random()*100) + 1,
    //사용자가 클릭한 함수
    answer : null, //얘는 사용자가 클릭한 숫자가 될 것이다.

    min : 1,
    max : 100 //지금당장만 1~100이다. 언제든 달라진다.
};


//숫자 아이콘 생성 함수
function makeNumberIcons() {
    //말그대로 아이콘을 만드는 함수이다.
    //html보면, id가 numbers인 div를 잡아놓기만하고 css도 안먹였었다.
    //저 안에다가 아이콘들을 직접 만들어서 배치 할 예정이다.
    //아이콘의 개수는 몇개가될까? 100개겠지만, 나중에는 사용자가 선택한 거에 따라 범위가 조정될거고 즉, 개수가 줄어들겠지
    //반복문을 이용해 개수를 조절할거다.

    //즉,
    //id=numbers인 div 태그 안에다가 숫자 아이콘을 배치해야 한다
    //숫자 아이콘의 개수는 객체가 가지고 있는 min, max에 따라 달라진다.
    //숫자 아이콘은 div태그이고, 클래스 이름은 icon으로 하겠다.
    
    //일단 부모요소 취득해야겠지
    const $numbers = document.getElementById('numbers');

    //이제 요소를 생성할껀데 요소가 한두개가 아니잖아?
    //처음은 100개야..
    //우린 복수개의 노드를 생성할떄마다 실존하는 라이브돔에 추가하면 좋지않다.
    //권장되는 방식은 가상의 컨테이너만들어서 한방에 추가하는 것이 성능상 이점이 있다.
    //가상 컨테이너 만들자
    const $frag = document.createDocumentFragment(); //가상의 컨테이너 미리 생성

    //이제 콘솔로그로 확인해보자
    console.log('min: ' + gameData.min);
    console.log('max: ' + gameData.max);
    //즉, 아이콘 만들기 전에 현재 min과 max값이 무엇인지, 그리고 함수가 제대로 작동하냐를 확인하려고 쓴 것이다.


    //반복문을 이용해서 요소를 생성할거고 이 요소들을 가상 컨테이너에 담자
    for(let i = gameData.min; i<=gameData.max; i++){
        //이제 반복해서 요소를 생성해야지
        //먼저 div 요소만들고 클래스이름 줄거고 text를 삽입할예정이다.
        const $icon = document.createElement('div');
        //클래스이름주자
        $icon.classList.add('icon');
        //text넣자
        $icon.textContent = i; //제어변수 i를 집어넣으면 되겠지? min이 1이고 max가 100이니, i값이 하나씩 증가하면서 1,2,3,4,5,6,7,8,...써주면되지?

        //그리고나서 가상컨테이너에 한번에 추가!
        $frag.appendChild($icon);

        //그럼이제 반복문 돌아가면서..반복문이 횟수만큼
        //div가 생성되면서 가상컨테이너에 추가되겠지
    }

    $numbers.appendChild($frag); //한번에 가상컨테이너에 추가했다!
    return $numbers; //즉, 아이콘 열심히 만들거고 마지막에는 numbers를 리턴하게 될 것이다.
}


    //up, down 애니메이션을 작동시킬 클래스를 추가/제거 함수를 정의하자
function executeUpDownAnimation(isUp){
    //up이면 true, down이면 false.
    //isUp변수에 true면, up에다가 클래스를 추가하면 되는 것이다.
    

    document.getElementById('up').classList.toggle('selected', isUp); //여기가 true면 selected가 추가되고 false면 추가가 안되겠지.
    //up에다가 selected라는 클래스이름을 추가할껀데, 조건이있다.
    //isUp이 true면 얘가 추가가되는거고,
    //isUp이 false면 사라지겠지.
    document.getElementById('down').classList.toggle('selected', !isUp);
    //이제 애니메이션만들어야겠지~css로가자
}














//정답을 판별해 주는 함수 정의
function checkAnswer($numbers, $target){
    //지금 정답은 모르고 객체한테 받아와야겠지
    //즉, 객체에서 정답과 사용자의 선택값을 가져오자

    const {secret, answer} = gameData;
    console.log(secret); //시크릿이 몇인지 찍어보자

    //그 다음으로, 요소를 취득하자
    //숫자 범위를 화면에 표시하기 위한 요소를 취득하자
    const $begin = document.getElementById('begin');
    const $end = document.getElementById('end');

    //이제 준비는 끝났고 확인해야지
    //아까 가져왔떤 secret과 end로..업인지 다운인지..
    //즉, 정답을 맞췄을 때는 정답 처리를 하는 함수를 호출(processCorrect)
    //up 또는 down일 경우에는 min과 max값을 변경해야함.
    //그리고 begin과 end값도 변경해야함.
    //aside 태그의 애니메이션을 담당할 executeupDownAnimation을 호출.
    //이것을 if, else if, else로 처리를 한다.
    if(secret === answer){
        //애니메이션 처리니까 alert안쓰잖아~
        //정답맞추면 Congratulations이 하늘에서떨어지면서 정답 숫자가 커져야한다.
        //이것도 함수화를 시킬 것이다.
        processCorrect($target); //즉, 지금 이벤트가 발생된 정답 요소(아이콘)를 보내줄 것이다.
        //얠 크기를 키울것이다..그리고 Congratulation박스가 나오게끔..

        //일단 얘 실행되고끝내자
        return;
    } else if(secret < answer){
        //down일경우잖아?
        gameData.max = answer-1;
        //그 다음에 숫자 범위를 화면에 표시하기 위한 end요소를 얻었었잖아?
        //비긴은 바꿀필요없다. end는 em태그다. em태그의 text를 바꿔주면 되겠지.
        $end.textContent = answer-1;
        

        //그 다음에 뭐해?
        //aside태그에 애니메이션줘야지(흔들흔들하는거)
        //얘도 함수화시킬꺼야
        executeUpDownAnimation(false);
        //업이 흔들려야하는지 다운이 흔들려야하는지 판단해야지?
        //down을 false로 지정해보자
    } else {
        //up일경우잖아?
        gameData.min = answer + 1;
        $begin.textContent = answer +1;
        //업다운 애니메이션을 동작시킬 함수에게 반대의 값 true를 주자
        //그럼 execute는 전달된 값이 true인지 false인지에따라 애니메이션 적용할거임
        executeUpDownAnimation(true);
    }




    //판별 후에는 아이콘을 재 배치.
    //아이콘을 지우는애들을 적어주자
    clearNumberIcons($numbers); //현재 렌더링 되어 있는(화면에 표현되어있는) 아이콘들을 전체 삭제.
    
    //그 다음에 make함수를 불러줄 것이다.
    makeNumberIcons(); //min과 max가 변경되어 있기 때문에 그에 맞춰서 아이콘을 다시 배치해줘야된다는 것이다.
}







//아이콘 전체 삭제 함수
function clearNumberIcons($numbers) {
    console.log('아이콘 전체 삭제!');

    //전달받은 부모요소를 반복문 이용해서 지워주자
    [...$numbers.children].forEach($icon => $numbers.removeChild($icon));
}









//얘는 정답을 맞췄을 시 처리를 수행할 함수 정의.
function processCorrect($target){  //정답 아이콘을 받을 것이다. 즉, 매개변수에 $표시 있으니 div를 받을거임
    //축하메시지 박스를 나타나게 하는 코드를 작성할거다.
    //왜냐하면, 축하 박스는 평소에는 숨겨놓을 것이다.
    //이제 드러나도 된다는 신호를 줄 것이다.
    //클래스 이름 추가하면 들어나게끔~
    const $finish = document.getElementById('finish');
    $finish.classList.add('show'); //show라는 클래스이름이 붙으면 들어나도 된다는 신호겠지.

    //congratulation 문구가 위에서 아래로 떨어지고, 정답 아이콘을 움직이게 할 것이다.
    $target.setAttribute('id', 'move'); /*id가 move인 div*/ 
    //이제 정답을 맞춘 숫자 아이콘의 크기가 커지도록 css를 꾸며보자
    



}












//핵심 실행 로직을 즉시 실행하는 함수를 만들자(Main 역할)
(function(){
    //로딩이 되자마자 바로 실행될 수 있도록.


    //아무튼, 자바스크립트 실행이 되면 뭐부터해?
    //아이콘 생성해야겠지. 아이콘들마다 이벤트걸어줘야지?
    

    //생성된 아이콘들에게 이벤트들에게 걸어줄것이다.
    //아이콘 생성 후 아이콘들의 부모 요소를 리턴받을 예정이다.

    const $numbers = makeNumberIcons();

    //이제 아이콘만들고나서 리턴을 해주는 로직을 작성하자
    //위로가서 작성해주자 (숫자아이콘생성함수)






    //이제 사용자가 숫자 아이콘을 클릭(선택)했을 때에
    //이벤트 처리하자(부모 요소에 이벤트 설정해서 전파하는 방식으로.)
    
    //아까 return $numbers로 리턴받았지?
    $numbers.addEventListener('click', function(e){
        //일단 아이콘을 정확하게 클릭한게 맞는지 확인해줘야지
        //아니면 이벤트를 발동시킬 필요가 없으니까.
        if(!e.target.matches('#numbers > .icon')){
            return; //이게 아니라면 리턴(강제종료)
        }
        console.log(`${e.target.textContent}클릭됨!`);
        //사용자가 선택한 값이 결국은 gameData라는 객체의 앤서겠지
        gameData.answer = +e.target.textContent; //숫자니까 +붙여서 숫자타입으로 바꿔주자~

        //마지막에는 정답을 체크하는 함수를 호출하자
        checkAnswer($numbers, e.target);
    });


})();