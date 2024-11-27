import axios from "axios";

// API 서버 기본 URL
const API_BASE_URL = "http://localhost:8080";

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: { "Content-Type": "application/json" },
});

const openApiClient = axios.create({
  baseURL: `${API_BASE_URL}/open-api`,
  headers: { "Content-Type": "application/json" },
});

// 공통 JSON 래핑 함수
const wrapPayload = (data) => ({
  result: {
    result_code: 200,
    result_message: "OK",
    result_description: "성공",
  },
  body: data,
});

// 사용자 등록 API
export const registerUser = async (data) =>
  openApiClient
    .post("/user/register", wrapPayload(data))
    .then((res) => res.data);

// 사용자 로그인 API
export const loginUser = async (credentials) =>
  openApiClient
    .post("/user/login", wrapPayload(credentials))
    .then((res) => res.data);

const ApiService = {
  registerUser,
  loginUser,
};

export default ApiService;