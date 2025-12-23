import Header from '../components/Header';
import '../styles/SpecialTheater.css';

function SpecialTheater() {
  // to the top button
  $(() => {
    $(window).scroll(() => {
      console.log($(window).scrollTop());
      if ($(window).scrollTop() > 900) {
        $('.tothetop').addClass('active');
      } else {
        $('.tothetop').removeClass('active');
      }
    });
  });

  return (
    <>
      <Header isHome={false}></Header>
      <div className="page_util">
        <div className="inner">
          <div className="breadcrumb">
            <i className="fa-solid fa-house"></i>
            <a href="https://www.megabox.co.kr/theater/list">극장</a>
            <a href="specialtheater.html">특별관</a>
          </div>
        </div>
      </div>
      <section id="specialTheater">
        <div className="inner">
          <h2>메가박스 특별관을 소개합니다</h2>
          {/* <!-- technology --> */}
          <div className="technology special">
            <h3><img src="/images/specialtheater/groupTitle01.png" alt="technology" /></h3>
            <div>
              <img src="/images/specialtheater/logo_dolbycinema.png" alt="dolby cinema" />
              <p>완벽한 영화 관람을 완성하는 하이엔드 시네마</p>
            </div>
            <div>
              <img src="/images/specialtheater/logo_dolbyvision.png" alt="dolby vision" />
              <p>돌비 시네마에 적용된 돌비 비전과 돌비 애트모스,<br />리클라이너를 더한 프리미엄 클래스</p>
            </div>
            <div>
              <img src="/images/specialtheater/logo_MX4D.png" alt="Mega MX4D" />
              <p>다이나믹 이펙트가 선사하는<br />새로운 영화 체험</p>
            </div>
            <div>
              <img src="/images/specialtheater/logo_LED.png" alt="Mega LED" />
              <p>무한대의 명암비,<br />완벽한 컬러 재현력</p>
            </div>
            <div>
              <img src="/images/specialtheater/logo_dolby_atmos.png" alt="dolby atomos" />
              <p>차원이 다른 공간감과 디테일한 사운드</p>
            </div>
          </div>{/* <!-- //technology --> */}
          {/* <!-- luxury --> */}
          <div className="luxury special">
            <h3><img src="/images/specialtheater/groupTitle02.png" alt="luxury" /></h3>
            <div>
              <img src="/images/specialtheater/logo_boutique_private.png" alt="boutique private" />
              <p>오직 나와 소중한 사람들을 위한<br />프라이빗한 극장 경험</p>
            </div>
            <div>
              <img src="/images/specialtheater/logo_suite.png" alt="suite" />
              <p>웰컴패키지가 더해진<br />럭셔리한 공간 경험</p>
            </div>
            <div>
              <img src="/images/specialtheater/logo_boutique.png" alt="boutique" />
              <p>섬세하게 디자인된 감각적인<br />극장 경험</p>
            </div>
          </div>{/* <!-- //luxury --> */}
          {/* <!-- comfort --> */}
          <div className="comfort special">
            <h3><img src="/images/specialtheater/groupTitle03.png" alt="comfort" /></h3>
            <div>
              <img src="/images/specialtheater/logo_recliner.png" alt="recliner" />
              <p>맞춤형 리클라이닝 시스템이<br />구현하는 극강의 편안함</p>
            </div>
            <div>
              <img src="/images/specialtheater/logo_comfort.png" alt="comfort" />
              <p>컴포트 체어로 누리는<br />더 안락한 영화 경험</p>
            </div>
          </div>{/* <!-- //comfort --> */}

          {/* <!-- top button --> */}
          <div className="tothetop"><a href="#top"><img src="/images/specialtheater/btn-go-top.png" alt="위로 가기" /></a></div>
        </div>{/* <!-- //.inner --> */}

      </section>
    </>
  )
}

export default SpecialTheater