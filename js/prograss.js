$(function () {
    let current = 0; // 시작값
    let target = 100; // 목표값
    let speed = 20; // 20ms(=0.02초) 마다 업데이트

    let timer = setInterval(function () {
        current++;

        // 진행바 채우기
        $(".progress-bar").css("width", current + "%");

        // 숫자 갱신
        $(".percent").text(current + "%");

        // 100% 되면 정지
        if (current >= target) {
            clearInterval(timer);
        }
    }, speed);
});