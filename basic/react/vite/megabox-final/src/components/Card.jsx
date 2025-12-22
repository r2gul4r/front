import { datas } from '../data/boxOffice';
import '../styles/Card.css';
import $ from "jquery";
window.$ = $;
window.jQuery = $;

// formatCount 함수
const formatCount = (num) => num >= 1000 ? (num / 1000).toFixed(1) + "k" : num;

// --- 좋아요 클릭 이벤트 ---
$(()=>{
  $('.like').on('click', function () {
    let $btn = $(this);
    let text = $btn.text();
    console.log(text);
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
});

function Card() {
  // datas 배열을 .map() 메서드를 사용하여 순회하고, 각 데이터 항목에 대해 React 엘리먼트(JSX)를 반환합니다.
  return (
    <div className="box_office">
      {datas.map((data) => {
        // 1. 스크린 타입 이미지를 JSX 배열로 변환합니다.
        // key는 반드시 React 엘리먼트에 직접 적용되어야 합니다.
        const screenImgs = data.screenTypes.map((ele, index) => (
          <img key={index} src={ele} alt="Screen Types" />
        ));

        // 2. JSX를 사용하여 박스 오피스 카드 전체 구조를 반환합니다.
        // 반복되는 요소의 가장 바깥쪽 엘리먼트에 'key' prop을 부여해야 합니다.
        return (
          <div className="box_office_card" key={data.rank}>
            <div className="inner">
              <div className="front">
                <span className="rank">{data.rank}</span>
                <div className="poster">
                  <img src={data.poster} alt={data.title} />
                </div>
                {/* JSX 배열을 직접 렌더링하면 React가 처리합니다. */}
                <div className="screen_type">{screenImgs}</div>
                <div className="grade">
                  <img src={data.grade} alt={`Grade ${data.age}`} />
                </div>
              </div>{/* //.front */}
              <div className="back">
                <p className="description">{data.description}</p>
                <div className="score">
                  관람평<span>{data.score}</span>
                </div>
              </div>{/* //.back */}
            </div>{/* //.inner */}
            {/* btn */}
            <div className="btn">
              <button type="button" className="like">
                <i className="fa-regular fa-heart"></i>
                {formatCount(data.like)}
              </button>
              <a href="#" className="reservation_link">
                예매
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;