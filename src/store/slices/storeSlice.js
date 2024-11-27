import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "store",
  initialState: {
    stores: [], // 초기값을 빈 배열로 설정
    selectedStore: null,
    menu: [],
  },
  reducers: {
    setStores(state, action) {
      state.stores = action.payload; // API에서 데이터를 받아 설정
    },
    selectStore(state, action) {
      state.selectedStore = action.payload;
    },
    setMenu(state, action) {
      state.menu = action.payload;
    },
  },
});

export const { setStores, selectStore, setMenu } = storeSlice.actions;
export default storeSlice.reducer;
