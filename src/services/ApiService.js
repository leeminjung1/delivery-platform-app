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

// 요청 인터셉터 설정
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["authorization-token"] = accessToken;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

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

// 가게 리스트
export const searchStores = async (query = {}) => {
  const params = { storeCategory: "COFFEE_TEA", ...query };
  return apiClient
    .get("/store/search", { params })
    .then((res) => res.data.body || []);
};

// 메뉴 리스트 요청
export const searchStoreMenus = async (storeId) =>
  apiClient
    .get("/store-menu/search", { params: { storeId } }) // storeId를 쿼리 파라미터로 전달
    .then((res) => res.data.body || []); // body에서 메뉴 데이터 추출

const ApiService = {
  registerUser,
  loginUser,
  searchStores,
  searchStoreMenus,
};

export default ApiService;
