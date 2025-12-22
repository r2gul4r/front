import '../styles/Footer.css'

function Footer() {
  $(()=>{
    $(".btn_looking_theater").on("click", (e) => {
      e.preventDefault();
      $(".theater").addClass("active");
    });
    $(".closed").on("click", () => {
      $(".theater").removeClass("active");
    });
  });

  return (
      <footer id="footer">
        <div className="theater">
          <div className="inbox">
            <div className="tit">
              <h2>메가박스 극장 찾기</h2>
              <span className="closed"><img src="/images/ico-layer-close-g.png" alt="닫기" /></span>
            </div>
            <div className="cont">지역별 극장명</div>
          </div>
        </div>

        <div className="inbox">
          <div className="footer_top">
            <ul className="fnb">
              <li><a href="#">회사소개</a></li>
              <li><a href="#">인재채용</a></li>
              <li><a href="#">사회공헌</a></li>
              <li><a href="#">제휴/광고/부대사업문의</a></li>
              <li><a href="#">이용약관</a></li>
              <li><a href="#"><strong>위치기반서비스 이용약관</strong></a></li>
              <li><a href="#"><strong>개인정보처리방침</strong></a></li>
              <li><a href="#">윤리경영</a></li>
            </ul>
            <a href="#" className="btn_looking_theater"><img src="/images/ico-footer-search.png" alt="극장찾기" />극장찾기</a>
          </div>
          <div className="footer_bottom">
            <div className="ci"><img src="/images/logo-opacity_new2.png" alt="메가박스" /></div>
            <div className="info">
              <address>서울특별시 강남구 테헤란로 87길 22 도심공항터미널 건물 408호 ARS 1544-0070 대표이메일
                m.dreamcenter@partner.megabox.co.kr</address>
              <p>대표자명 홍정인, 남용석 · 개인정보보호책임자 김수현 · 사업자등록번호 211-86-59478 · 통신판매업신고번호 2025-서울강남-00722cc</p>
              <p className="copy">COPYRIGHT MegaboxJoongAng, Inc. All rights reserved</p>
            </div>
            <div className="sns">
              <a href="#"><img src="/images/ico-youtubeN.png" alt="유튜브" /></a>
              <a href="#"><img src="/images/ico-instagramN.png" alt="인스타그램" /></a>
              <a href="#"><img src="/images/ico-facebookN.png" alt="페이스북" /></a>
              <a href="#"><img src="/images/ico-twitterN.png" alt="트위터" /></a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer