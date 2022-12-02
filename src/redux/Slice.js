import { createSlice } from '@reduxjs/toolkit';
import { getData } from './SoccupApi';

const Slice = createSlice({
  name: 'testSlice',
  initialState: {value: []},
  reducers: {
    test: (state, action) => {
      state.value = action.payload;
    }
  },
  extraReducers: (builder) => {   // 비동기적인 action
    // 무슨 api일까요....?
    builder.addCase(getData.pending, (state, action) => {
      state.status = 'Loading';
    })
    builder.addCase(getData.fulfilled, (state, action) => {
      state.value[0] = action.payload;
      state.status = 'complete';
    })
    builder.addCase(getData.rejected, (state, action) => {
      state.status = 'fail';
    })
  }
});

export default Slice;
// 비구조화 할당으로 정의하여 수출
export const { test } = Slice.actions;