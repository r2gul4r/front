// --- 좋아요 클릭 이벤트 ---
$(document).on('click', '.like', function () {
    let $btn = $(this);
    let text = $btn.text();
    let current = parseFloat(text);
    if (text.includes('k')) current *= 1000;

    if ($btn.hasClass('active')) {
        current -= 1;
        $btn.removeClass('active');
        $btn.find('i').attr('class', 'fa-regular fa-heart');
    } else {
        current += 1;
        $btn.addClass('active');
        $btn.find('i').attr('class', 'fa-solid fa-heart');
    }

    $btn.contents().last()[0].textContent = formatCount(current);
});