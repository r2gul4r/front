$(function () {
    let current = 0; // 시작값
    let target = 85; // 목표값
    let speed = 20; // 20ms(=0.02초) 마다 업데이트

    let timer = setInterval(function () {
        current++;

        // 진행바 채우기
        $(".progress-bar1").css("width", current + "%");

        // 숫자 갱신
        $(".percent1").text(current + "%");

        // 100% 되면 정지
        if (current >= target) {
            clearInterval(timer);
        }
    }, speed);
});

$(function () {
    let current = 0; // 시작값
    let target = 95; // 목표값
    let speed = 20; // 20ms(=0.02초) 마다 업데이트

    let timer = setInterval(function () {
        current++;

        // 진행바 채우기
        $(".progress-bar2").css("width", current + "%");

        // 숫자 갱신
        $(".percent2").text(current + "%");

        // 100% 되면 정지
        if (current >= target) {
            clearInterval(timer);
        }
    }, speed);
});