import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginUser from "./components/LoginUser";
import RegisterUser from "./components/RegisterUser";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 기본 라우트 : 로그인 화면 */}
        <Route path="/" element={<Navigate to="/user/login" />} />

        {/* 로그인 및 회원 가입 */}
        <Route path="/user/login" element={<LoginUser />} />
        <Route path="/user/register" element={<RegisterUser />} />
      </Routes>
    </Router>
  );
};

export default App;
