// header 2depth background
$('.main li:not(:nth-of-type(5)').mouseenter((e)=>{
    $('#header').addClass('active');
});
$('.main li').mouseleave(()=>{
    $('#header').removeClass('active');
});

// footer - looking for theater
$(".btn_looking_theater").on("click", () => {
    $(".theater").addClass("active");
});
$(".closed").on("click", () => {
    $(".theater").removeClass("active");
});