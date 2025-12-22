import '../styles/Header.css'

function Header({isHome}) {
    $(()=>{
        $('.main li:not(:nth-of-type(5)').on("mouseenter", () => {
            $('#header').addClass('active');
        });
        $('.main li').on("mouseleave", () => {
            $('#header').removeClass('active');
        });
    });

    const headerClass = isHome ? 'home-header' : 'sub-header';

    return (
        <header id="header" className={headerClass}>
            <div className="inner">
                {/* <!-- logo --> */}
                <h1 id="logo"><a href="/"></a></h1>
                {/* <!-- top link --> */}
                <div className="top_link">
                    <div className="left_link">
                        <a href="https://www.megabox.co.kr/benefit/viplounge">VIP LOUNGE</a>
                        <a href="https://www.megabox.co.kr/benefit/membership">멤버십</a>
                        <a href="https://www.megabox.co.kr/support">고객센터</a>
                    </div>
                    <div className="left_link">
                        <a href="#">로그인</a>
                        <a href="https://www.megabox.co.kr/join">회원가입</a>
                        <a href="https://www.megabox.co.kr/booking">빠른예매</a>
                    </div>
                </div>{/* <!-- //.top_link --> */}
                {/* <!-- GNB --> */}
                <nav id="gnb">
                    <ul className="main">
                        <li>
                            <a href="https://www.megabox.co.kr/movie">영화</a>
                            <ul className="sub">
                                <li><a href="https://www.megabox.co.kr/movie">전체영화</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.megabox.co.kr/booking">예매</a>
                            <ul className="sub">
                                <li><a href="https://www.megabox.co.kr/booking">빠른예매</a></li>
                                <li><a href="https://www.megabox.co.kr/booking/timetable">상영시간표</a></li>
                                <li><a href="https://www.megabox.co.kr/booking/privatebooking">더 부티크 프라이빗 예매</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.megabox.co.kr/theater/list">극장</a>
                            <ul className="sub">
                                <li><a href="https://www.megabox.co.kr/theater/list">전체극장</a></li>
                                <li><a href="/specialtheater">특별관</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.megabox.co.kr/event">이벤트</a>
                            <ul className="sub">
                                <li><a href="https://www.megabox.co.kr/event">진행중 이벤트</a></li>
                                <li><a href="https://www.megabox.co.kr/event/end">지난 이벤트</a></li>
                                <li><a href="https://www.megabox.co.kr/event/winner/list?currPage=1&searchText=&">당첨자발표</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.megabox.co.kr/store">스토어</a>
                        </li>
                        <li>
                            <a href="https://www.megabox.co.kr/benefit/membership">혜택</a>
                            <ul className="sub">
                                <li><a href="https://www.megabox.co.kr/benefit/membership">메가박스 멤버십</a></li>
                                <li><a href="https://www.megabox.co.kr/benefit/discount/guide">제휴/할인</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>{/* <!-- //#gnb --> */}

                {/* <!-- link icon --> */}
                <div className="link_icon">
                    <div className="left_link">
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>
                    <div className="right_link">
                        <a href="https://www.megabox.co.kr/booking/timetable"></a>
                        <a href="#"></a>
                    </div>
                </div>
            </div>{/* <!-- //.inner --> */}
        </header>
    )
}

export default Header