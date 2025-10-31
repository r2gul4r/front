function digitalClock() {

    // 변수 선언
    const date = new Date();
    const clockBox = document.getElementById('clock');
    let day; // 요일을 담을 변수
    let clock;

    // 처리
    if (date.getDay() === 0) {
        day = '일';
    } else if (date.getDay() === 1) {
        day = '월';
    } else if (date.getDay() === 2) {
        day = '화';
    } else if (date.getDay() === 3) {
        day = '수';
    } else if (date.getDay() === 4) {
        day = '목';
    } else if (date.getDay() === 5) {
        day = '금';
    } else if (date.getDay() === 6) {
        day = '토';
    }


    // 출력
    clock = 
        date.getFullYear() + '년 ' +
        (date.getMonth() + 1) + '월 ' +
        date.getDate() + '일 ' +
        '(' + day + ') ' +
        date.getHours() + ':' +
        date.getMinutes() + ':' +
        date.getSeconds();
    

    clockBox.innerHTML = clock;

}

// setInterval(함수, 시간);
// 자바스크립트는 시간을 밀리초 단위로 표현한다.
setInterval(digitalClock, 1000);