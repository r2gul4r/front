$(window).scroll(function () {
    //변수 선언
    const windowHeight = $(window).height();
    let windowScrollTop = $(window).scrollTop();
    const speed = 1000,
        easing = "easeOutExpo",
        pos = 0,
        offset = 0.5;

    // 오른쪽 상단에 스크롤 양과 창 높이 값 출력
    // console.log(windowScrollTop + " , " + windowHeight);

    if (windowScrollTop > windowHeight / offset) {
        //참일 경우
        // i는 0, 1, 2, 3
        for (let i = 0; i < 4; i++) {
            $(".motion")
                .eq(i)
                .stop()
                .animate(
                    { top: pos, opacity: 1 },
                    (speed * (i + 1)) / 2,
                    easing
                );
        }
    } else {
        //거짓일 경우
        $(".motion")
            .stop()
            .animate({ top: pos + 600, opacity: 0 }, speed, easing);
    }
});