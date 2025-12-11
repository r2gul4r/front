// header 2depth background
// :not(:nth-of-type(5)
// -> 스토어 메뉴는 하위 메뉴가 없으므로 제외
$('.main > li:not(:nth-of-type(5)').mouseenter(function(){
    $('#header').addClass('active');
    $(this).find('sub').addClass('active');
});
$('.main > li').mouseleave(()=>{
    $('#gnb .sub').removeClass('active');
});
$('.main > li').mouseleave(()=>{
    $('#gnb .sub').removeClass('active');
});
$('.main > li').mouseleave(()=>{
    $('#gnb .sub').removeClass('active');
});

// footer - looking for theater
$(".btn_looking_theater").on("click", () => {
    $(".theater").addClass("active");
});
$(".closed").on("click", () => {
    $(".theater").removeClass("active");
});