import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import StoreList from "./components/StoreList";
import StoreMenu from "./components/StoreMenu";
import RegisterUser from "./components/RegisterUser";
import LoginUser from "./components/LoginUser";
import ProtectedRoute from "./components/ProtectedRoute"; // 인증 보호 라우트

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 기본 경로: 로그인 페이지로 이동 */}
        <Route path="/" element={<Navigate to="/user/login" replace />} />

        {/* 로그인 및 회원가입 */}
        <Route path="/user/login" element={<LoginUser />} />
        <Route path="/user/register" element={<RegisterUser />} />

        {/* 가게 목록: 보호된 경로 */}
        <Route
          path="/stores"
          element={
            <ProtectedRoute>
              <StoreList />
            </ProtectedRoute>
          }
        />

        {/* 가게 메뉴: 보호된 경로 */}
        <Route
          path="/store/:id/menu"
          element={
            <ProtectedRoute>
              <StoreMenu />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;