// main.js
const formatCount = (num) => num >= 1000 ? (num / 1000).toFixed(1) + "k" : num;

// Movie Card UI
$(datas).each((idx, data) => {
    const screenImgs = data.screenTypes
        .map((ele) => `<img src="${ele}" alt="Screen Types">`)
        .join("");

    const card = `<div class="box_office_card">
            <div class="inner">
                <div class="front">
                    <span class="rank">${data.rank}</span>
                    <div class="poster">
                        <img src="${data.poster}" alt="${data.title}">
                    </div>
                    <div class="screen_type">${screenImgs}</div>
                    <div class="grade">
                        <img src="${data.grade}" alt="Grade ${data.age}">
                    </div>
                </div><!-- //.front -->
                <div class="back">
                    <p class="description">${data.description}</p>
                    <div class="score">관람평<span>${data.score}</span></div>
                </div><!-- //.back -->
            </div><!-- //.inner -->
            <!-- btn -->
            <div class="btn">
                <button type="button" class="like"><i class="fa-regular fa-heart"></i>${formatCount(data.like)}</button>
                <a href="" class="reservation_link">예매</a>
            </div>
        </div>`;

    $(".box_office").append(card);
}); // each()