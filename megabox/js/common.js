// header 2depth background
// :not(:nth-of-type(5)
// -> 스토어 메뉴는 하위 메뉴가 없으므로 제외
$(".main > li:not(:nth-of-type(5)").mouseenter(e => {
    $(e.currentTarget).find(".sub").addClass("active");
    $("#header").addClass("active");
});

$(".main > li").mouseleave(() => {
    $("#header").removeClass("active");
    $('.sub').removeClass("active");
});

$("#header .subbar").mouseenter(() => {
    $("#header").addClass("active");
});
$("#header .subbar").mouseleave(() => {
    $("#header").removeClass("active");
});

// footer - looking for theater
$(".btn_looking_theater").on("click", () => {
    $(".theater").addClass("active");
});
$(".closed").on("click", () => {
    $(".theater").removeClass("active");
});