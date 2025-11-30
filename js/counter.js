$(function () {
    // 애니메이션이 완료되는 데 걸리는 '총 시간' (밀리초)
    const ANIMATION_DURATION = 2000; // 2초로 설정

    function runCounter($counter) {
        var target = parseInt($counter.attr("data-target"));
        var count = 0;
        
        // 목표값에 따라 `setInterval`의 속도를 동적으로 계산
        // 속도 = 총 시간 / 목표값. 이 속도(delay)로 1씩 증가하면 총 시간 내에 완료됩니다.
        // Math.max를 사용하여 최소 1ms의 딜레이는 보장합니다.
        var speed = Math.max(1, Math.floor(ANIMATION_DURATION / target)); 

        $counter.text(0);
        $counter.parent('.progress-bar').css("width", 0 + "%"); // 시작 시 너비 0%로 확실히 설정

        // 기존 인터벌이 있다면 제거 (버그 방지 및 리셋을 위함)
        if ($counter.data('counterInterval')) {
            clearInterval($counter.data('counterInterval'));
        }

        var counterInterval = setInterval(function () {
            count++;
            if (count >= target) {
                clearInterval(counterInterval);
                count = target; // 정확히 목표값으로 설정
            }
            
            // 바 증가
            $counter.parent('.progress-bar').css("width", count + "%");
            
            // 숫자(퍼센트) 증가
            // skill 내부의 카운터는 퍼센트 기호를 붙여줍니다.
            if ($counter.hasClass('percent') || $counter.hasClass('percent2')) {
                $counter.text(count + "%");
            } else {
                // counterWrapd의 카운터는 숫자만 표시
                $counter.text(count);
            }
        }, speed);

        // 생성된 인터벌을 jQuery 데이터에 저장하여 나중에 리셋할 수 있도록 합니다.
        $counter.data('counterInterval', counterInterval);
    } // function runCounter($counter) end

    function checkScroll() {
        const scrollTop = $(window).scrollTop(),
            windowHeight = $(window).height();
        
        // 1. Skill 섹션의 카운터 처리 (리셋 및 0부터 시작)
        const skillElementTop = $(".counters").first().offset().top; // .skill 내부의 .counters
        const $skillCounters = $(".skill .counter");

        // 스킬 섹션이 뷰포트에 들어왔는지 확인하는 조건
        if (scrollTop + windowHeight > skillElementTop + 100) {
            $skillCounters.each(function () {
                const $this = $(this);
                // 뷰포트에 들어왔고, 아직 활성화되지 않았다면 0부터 시작
                if (!$this.hasClass("active")) {
                    $this.addClass("active");
                    // 기존 인터벌을 강제 종료하고 0으로 리셋
                    if ($this.data('counterInterval')) {
                        clearInterval($this.data('counterInterval'));
                    }
                    $this.text($this.hasClass('percent') || $this.hasClass('percent2') ? "0%" : "0");
                    $this.parent('.progress-bar').css("width", "0%");
                    
                    runCounter($this); // 0부터 다시 시작
                }
            });
        } else {
            // 스킬 섹션이 뷰포트 위에 있다면 리셋
            $skillCounters.each(function () {
                const $this = $(this);
                if ($this.hasClass("active")) {
                    $this.removeClass("active");
                    // 인터벌 중지 및 값 리셋
                    if ($this.data('counterInterval')) {
                        clearInterval($this.data('counterInterval'));
                    }
                    $this.text($this.hasClass('percent') || $this.hasClass('percent2') ? "0%" : "0");
                    $this.parent('.progress-bar').css("width", "0%");
                }
            });
        }
        
        // 2. counterWrapd 섹션의 카운터 처리 (기존 로직 유지)
        const counterWrapdElementTop = $("#counterWrap .counters").offset().top; 
        const $counterWrapdCounters = $("#counterWrap .counter");

        if (scrollTop + windowHeight > counterWrapdElementTop + 100) {
            $counterWrapdCounters.each(function () {
                const $this = $(this);
                if (!$this.hasClass("active")) {
                    $this.addClass("active");
                    runCounter($this);
                }
            });
        } else {
            // counterWrapd 섹션이 뷰포트 위에 있을 때, 기존 로직처럼 리셋하지 않고 `active` 클래스만 제거합니다.
            // (요청에 따라 counterWrapd의 기능은 그대로 유지했습니다.)
            // 만약 counterWrapd도 리셋하려면 $this.text(0); 등을 추가해야 합니다.
            $counterWrapdCounters.removeClass("active");
        }

    } // function checkScroll() end

    // 스크롤 이벤트에 throttle 적용
    $(window).on("scroll", $.throttle ? $.throttle(100, checkScroll) : checkScroll);
    
    // 페이지 로드 시 한 번 실행
    checkScroll();
}); // $(document).ready() end