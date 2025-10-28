function fn2() {
    // js실행 문장;
    alert('javaScript');   
}

// 버튼 선택
// js는 명령어(단어) 대소문자 구분
var btn2 = document.getElementById('btn2'); //gI

// 이벤트 작성
btn2.onclick = function() {
    //함수 호출
    fn2();
};