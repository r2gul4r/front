        $(function () {

            function runCounter($counter) {
                var target = parseInt($counter.attr("data-target")),
                    count = 0,
                    speed = 50;

                $counter.text(0);

                var counterInterval = setInterval(function () {
                    // count += Math.ceil(target / 100);
                    count++;
                    if (count >= target) {
                        //count = target;
                        clearInterval(counterInterval);
                    }
                    $counter.text(count);
                }, speed);
            } // function runCounter($counter) end

            function checkScroll() {
                const scrollTop = $(window).scrollTop(),
                    windowHeight = $(window).height(),
                    elementTop = $('#counters').offset().top;

                $(".counter").each(function () {
                    const $this = $(this);

                    if (scrollTop + windowHeight > elementTop + 100) {
                    // if (scrollTop + windowHeight > elementTop + 50 && scrollTop < elementTop + $this.outerHeight()) {
                        if (!$this.hasClass("active")) {
                            $this.addClass("active");
                            runCounter($this);
                        }
                    } else {
                        $this.removeClass("active");
                        $this.text(0);
                    }
                });
                console.log($(window).scrollTop());
            } // function checkScroll() end

            // $.throttle(시간, 함수)
            // -> 시간은 ms, 예) 100 -> 0.1초
            $(window).on("scroll", $.throttle(100, checkScroll));
            //$(window).on("scroll", checkScroll);
            checkScroll();
        });