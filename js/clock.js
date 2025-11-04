function digitalClock() {

    // 변수 선언
    // const: 재선언과 재할당 모두 불가!
    // const: 선언하면서 할당도 바로해야함
    // let: 재선언 불가, 재할당 가능
    // new Date(): 날짜와 시간 객체(인스턴스)
    const date = new Date();
    console.log(new Date()); 
    // document: 문서 객체
    // getElementById('아이디'): 메서드(매개변수, ...)
    const clockBox = document.getElementById('clock');
    let day; // 요일을 담을 변수
    let clock; // 출력변수
    // 날짜
    let yy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    //시간
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    // 처리
    // if (date.getDay() === 0) {
    //     day = '일';
    // } else if (date.getDay() === 1) {
    //     day = '월';
    // } else if (date.getDay() === 2) {
    //     day = '화';
    // } else if (date.getDay() === 3) {
    //     day = '수';
    // } else if (date.getDay() === 4) {
    //     day = '목';
    // } else if (date.getDay() === 5) {
    //     day = '금';
    // } else if (date.getDay() === 6) {
    //     day = '토';
    // }

    switch (date.getDay()) {
        case 0:
            day = '일';
            break;
        case 1:
            day = '월';
            break;
        case 2:
            day = '화';
            break;
        case 3:
            day = '수';
            break;
        case 4:
            day = '목';
            break;
        case 5:
            day = '금';
            break;

        default:
            day = '토'
    }

   

    // 3항 연산자
    const ampm = hour >= 12 ? 'PM' : 'AM';
    // 0시는 12시로 표시
    hour = hour % 12;
    // 0~11까지는 나머지가 0~11
    // 12~23까지는 나머지가 0~11
    hour = hour ? hour : 12;

    // 두자리 맞추기
    if (hour < 10) {
        hour = '0' + hour
    }else {
        hour =hour;
    }
    if (minute < 10) {
        minute = '0' + minute
    }else {
        minute =minute;
    }
    if (second < 10) {
        second = '0' + second
    }else {
        second =second;
    }



    hour = twoDigits(hour);
    minute = twoDigits(minute);
    second = twoDigits(second);

    // 출력
    clock = yy + '년' + mm + '월' + dd + '일' + '(' + day + ') ' + ampm + hour + ':' + minute + ':' + second;
    
    clock = '${yy}년${mm}월${dd}일(${day})${ampm}${hour}:${minute}:${second}';
        

    clockBox.innerHTML = clock;
}

// setInterval(함수, 시간);
// 자바스크립트는 시간을 밀리초 단위로 표현한다.
setInterval(digitalClock, 1000);

    function twoDigits(timePara) {
    timePara = (timePara < 10) ? "0" + timePara : timePara;
}
    return timePara;