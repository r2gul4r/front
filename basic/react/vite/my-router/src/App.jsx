import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element="{<Home />}"></Route>      {/* 메인 페이지 */}
        <Route path="/about" element={<About />}></Route> {/* 서브 페이지 */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;