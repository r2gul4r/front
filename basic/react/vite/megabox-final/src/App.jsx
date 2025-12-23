// src/App.jsx 예시 (react-router-dom 사용 가정)

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages 폴더에서 페이지 컴포넌트를 불러옵니다.
import Header from './components/Header';
import Footer from './components/Footer';
import SpecialTheater from './pages/SpecialTheater';
import Home from './pages/Home';

function App() {
  return (
    // 1. BrowserRouter: 웹 전체를 감싸서 라우팅 기능을 활성화합니다.
    <BrowserRouter> 
      {/* 2. <Header />와 같은 공통 컴포넌트는 여기에 배치하여 모든 페이지에 보이게 합니다. */}
      {/* <Header />  */}
      
      {/* 3. Routes: 모든 개별 라우트(경로)들을 모아두는 컨테이너입니다. */}
      <Routes> 
        {/* 4. Route: 개별 주소와 페이지 컴포넌트를 연결하는 '길 안내' 표지판입니다. */}
        
        {/* 메인 페이지 설정 */}
        <Route path="/" element={<Home />} />
        
        {/* 회사 소개 페이지 설정 */}
        <Route path="/specialtheater" element={<SpecialTheater />} />
        
      </Routes>
      
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;