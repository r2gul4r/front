$(function () {
    function runCounter($counter) {
        var target = parseInt($counter.attr("data-target")),
            count = 0,
            speed = 50;

        $counter.text(0);

        var counterInterval = setInterval(function () {
            count++;
            if (count >= target) {
                clearInterval(counterInterval);
            }
            $counter.text(count);
        }, speed);
    } // function runCounter($counter) end

    function checkScroll() {
        const scrollTop = $(window).scrollTop(),
            windowHeight = $(window).height(),
            elementTop = $("#counters").offset().top;

        $(".counter").each(function () {
            const $this = $(this);
            //console.log($this);

            if (scrollTop + windowHeight > elementTop + 100) {
                if (!$this.hasClass("active")) {
                    $this.addClass("active");
                    runCounter($this);
                }
            } else {
                $this.removeClass("active");
                $this.text(0);
            }
        });
        //console.log($(window).scrollTop());
    } // function checkScroll() end

    $(window).on("scroll", $.throttle(100, checkScroll));
    checkScroll();

}); // $(document).ready() end