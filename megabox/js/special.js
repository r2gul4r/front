// to the top button
$(window).scroll(()=>{
    console.log($(this).scrollTop());
    if ($(this).scrollTop() > 900 ) {
        $('.tothetop').addClass('active');
    } else {
        $('.tothetop').removeClass('active');
    }
});