



function createCookie(name){
    //매개값으로 popup이라는 문자 날려줬으니 name으로 받자

    const date = new Date(); //미래시간을 지목하기 위해 데이트 객체 생성
    date.setDate(date.getDate + 1); //수명을 하루로 설정했다.

    //그 다음에는 문자열을 완성해줘야지. 쿠키의 값 문자열을...
    let cookie = '';

    //형식에 맞게 완성해주자
    cookie += `${name}=true;`;  //세미콜론 필수~


    //그리고 나서 유효기간 지정(쿠키의 수명 지정)
    cookie += 'expires=' + date.toUTCString();


    //다했으면
    document.cookie = cookie; //다된쿠키에 문자열 쿠키를 저장하겠다~




    //이제 main.html로 가자


}





    //다시 와서 getCookie함수만들자
    function getCookie(name){
        //찾는거야 뭐 트루폴스만 리턴하면되지
        const cookies = document.cookie.split(';');

        //이제 팝업이라는 이름의 쿠키가 존재하는지 찾아야겠지
        for(let c of cookies){
            if(c.search(name) !== -1){
                //-1이 아니라면은 찾았다는 것이니
                return true; //존재하면 true로 리턴하겠다~
            }
        }
        return false;
        //포문이 끝났는데도 return이 안되면 false주면되지
        //return false; 라고 쓰면 되지만
        //겟쿠키를 불러서 팝업이라는 쿠키가 없어. 그러면 계속 찾을꺼아니야 포문이?
        //리턴true가 발동이 안되면 포문은 끝나겠지. 그리고 리턴이 없지?
        //겟쿠키 부른쪽은 리턴되는게 없으니 undefined라고 지정이 된다.
        //undefined는 false값이다. 논리형 암묵적 표현.
    }