// 전역 변수로 animated 상태를 관리합니다.
let animated = false; 
let timer1, timer2; // 각 프로그래스 바의 타이머를 저장할 전역 변수

// 각 프로그래스 바의 애니메이션을 실행하는 함수
function runProgressBar() {
    // 첫 번째 프로그래스 바 애니메이션
    let current1 = 0; // 시작값
    const target1 = 85; // 목표값
    const speed1 = 19; // 20ms(=0.02초) 마다 업데이트

    timer1 = setInterval(function () {
        current1++;

        // 진행바 채우기
        $(".progress-bar1").css("width", current1 + "%");

        // 숫자 갱신
        $(".percent1").text(current1 + "%");

        // 목표값 되면 정지
        if (current1 >= target1) {
            clearInterval(timer1);
        }
    }, speed1);

    // 두 번째 프로그래스 바 애니메이션
    let current2 = 0; // 시작값
    const target2 = 95; // 목표값
    const speed2 = 17; // 20ms(=0.02초) 마다 업데이트

    timer2 = setInterval(function () {
        current2++;

        // 진행바 채우기
        $(".progress-bar2").css("width", current2 + "%");

        // 숫자 갱신
        $(".percent2").text(current2 + "%");

        // 목표값 되면 정지
        if (current2 >= target2) {
            clearInterval(timer2);
        }
    }, speed2);
}

// 스크롤 위치를 확인하고 프로그래스 바 애니메이션을 제어하는 함수
function checkScroll() {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    // "#progress-section"의 위치를 가져옵니다.
    const sectionTop = $("#progress-section").offset().top; 
    // 섹션이 화면에 들어왔다고 판단하는 기준
    const triggerOffset = 200; // 섹션 상단에서 200px 정도 내려왔을 때 발동

    // 1. 섹션이 화면에 진입했을 때 (애니메이션 실행)
    // 현재 스크롤 위치 + 뷰포트 높이 > 섹션의 상단 + 약간의 오프셋
    // 즉, 섹션이 화면의 아랫부분으로 들어왔을 때 애니메이션 실행
    if (!animated && scrollTop + windowHeight > sectionTop + triggerOffset) {
        animated = true; // 애니메이션 실행 상태로 변경
        runProgressBar(); // 프로그래스 바 실행
    } 

    // 2. 섹션이 화면 밖으로 완전히 벗어났을 때 (애니메이션 초기화 및 정지)
    // 현재 스크롤 위치 + 뷰포트 높이 < 섹션의 상단
    // 즉, 섹션이 화면의 윗부분으로 완전히 벗어났을 때 초기화
    if (animated && scrollTop + windowHeight < sectionTop) {
        animated = false; // 애니메이션 초기화 상태로 변경

        // 진행 중인 타이머가 있다면 정지
        if (timer1) {
            clearInterval(timer1);
        }
        if (timer2) {
            clearInterval(timer2);
        }

        // 프로그래스 바와 숫자를 초기 상태로 리셋
        $(".progress-bar1, .progress-bar2").css("width", "0%");
        $(".percent1").text("0%");
        $(".percent2").text("0%");
    }
}

// 페이지 로드 시 및 스크롤 시 checkScroll 함수를 실행
$(document).ready(function() {
    // 즉시 실행된 기존 코드를 삭제하고 runProgressBar를 사용하도록 변경
    
    // 스크롤 이벤트 리스너 추가
    $(window).on('scroll', checkScroll);
    
    // 페이지 로드 시에도 한 번 체크하여 섹션이 이미 보이는 경우 애니메이션 실행
    checkScroll();
});