$(datas).each((idx, data) => {
    const desc = data.description.map(ele=>`<li>${ele}</li>`).join('');

    const card = `<div class="box_office_card col-lg col-md-6 motion position-relative">
            <div class="inner">
                <div class="front">
                    <span class="rank">${data.rank}</span>
                    <div class="poster">
                        <img class="w-100 h-100 object-fit-cover" src="${data.poster}" alt="${data.title}">
                    </div>
                </div><!-- //.front -->
                <div class="back">
                    <ul>${desc}</ul>
                    <div class="worktime">작업 시간<span>${data.worktime}</span></div>
                </div><!-- //.back -->
            </div><!-- //.inner -->
            <!-- btn -->
            <div class="btn">
                <span class="worktype">${data.task}</span>
                <a href="${data.siteurl}" class="btn btn-info text-white m-0 d-block text-center sitelink">사이트 바로가기</a>
            </div>
        </div>`;

    $(".portfolio").append(card);
}); // each()
