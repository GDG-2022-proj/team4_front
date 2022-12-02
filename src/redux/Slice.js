import { createSlice } from '@reduxjs/toolkit';
import { getSearchData, getAllPlayer } from './SoccupApi';

const Slice = createSlice({
  name: 'Slice',
  initialState: {value: []},
  reducers: {
    searchKeyword: (state, action) => {
      state.value[0] = action.payload;
    },
    readAllPlayer: (state, aciton) => {
      state.value[1] = aciton.payload;
    }
  },
  extraReducers: (builder) => {   // 비동기적인 action
    // 선수 상세페이지
    builder.addCase(getSearchData.pending, (state, action) => {
      state.status = 'Loading';
    })
    builder.addCase(getSearchData.fulfilled, (state, action) => {
      state.value[0] = action.payload;
      state.status = 'complete';
    })
    builder.addCase(getSearchData.rejected, (state, action) => {
      state.status = 'fail';
    })
    // 모든 선수 정보 가져오기
    builder.addCase(getAllPlayer.pending, (state, action) => {
      state.status = 'Loading';
    })
    builder.addCase(getAllPlayer.fulfilled, (state, action) => {
      state.value[0] = action.payload;
      state.status = 'complete';
    })
    builder.addCase(getAllPlayer.rejected, (state, action) => {
      state.status = 'fail';
    })
  }
});

export default Slice;
// 비구조화 할당으로 정의하여 수출
export const { searchKeyword } = Slice.actions;