import { createSlice } from '@reduxjs/toolkit';
import { getSearchData } from './SoccupApi';

const Slice = createSlice({
  name: 'Slice',
  initialState: {value: []},
  reducers: {
    searchKeyword: (state, action) => {
      state.value[0] = action.payload;
    },
    test: (state, action) => {
      state.value[1] = action.payload;
    },
  },
  extraReducers: (builder) => {   // 비동기적인 action
    // 무슨 api일까요....?
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
  }
});

export default Slice;
// 비구조화 할당으로 정의하여 수출
export const { searchKeyword } = Slice.actions;