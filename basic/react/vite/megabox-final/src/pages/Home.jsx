import Header from './../components/Header';
import Card from './../components/Card';
import '../styles/Home.css';

function Home() {

    return (
        <div className="container">
            <Header isHome={true}></Header>
            <section id="home">
                <div className="inner">
                    <h2>박스오피스</h2>
                    <div className="more"><a href="https://www.megabox.co.kr/movie">더 많은 영화보기<i className="fa-solid fa-plus"></i></a>
                    </div>
    
                    {/* <!-- Card UI(카드 UI) --> */}
                    <Card />
    
                    {/* <!-- 섹션 링크 --> */}
                    <ul className="link">
                        {/* <!-- 검색 창 --> */}
                        <li><span className="search"><input type="text" placeholder="영화명을 입력해 주세요" /></span></li>
                        <li><a href="https://www.megabox.co.kr/booking/timetable"><img src="/images/ico-schedule-main.png"
                            alt="상영시간표" /><span>상영시간표</span></a></li>
                        <li><a href="https://www.megabox.co.kr/movie"><img src="/images/ico-boxoffice-main.png"
                            alt="박스오피스" /><span>박스오피스</span></a></li>
                        <li><a href="https://www.megabox.co.kr/booking"><img src="/images/ico-quick-reserve-main.png"
                            alt="빠른예매" /><span>빠른예매</span></a></li>
                    </ul>
                    {/* <!-- 마우스 모양 애니메이션 --> */}
                    <div className="mouse"><span><img src="/images/ico-mouse.png" alt="아래로" /></span></div>
                </div>
            </section>
        </div>
    )
}

export default Home