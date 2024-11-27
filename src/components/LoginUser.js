import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../store/slices/authSlice";
import ApiService from "../services/ApiService";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiService.loginUser(formData);
      // 로그인 성공 시 상태 업데이트
      const accessToken = response.body.access_token;
      const refreshToken = response.body.refresh_token;

      // redux 상태/ 로컬 스토리지에 저장
      dispatch(setToken({ accessToken, refreshToken }));
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      alert("Login successful!");
      navigate("/stores"); // 로그인 후 가게 목록 페이지로 이동
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please check your email and password.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            name="email"
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Log In
          </Button>
        </Box>
        {/* 회원가입 링크 추가 */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            Don't have an account?{" "}
            <Link href="/user/register" underline="hover">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginUser;