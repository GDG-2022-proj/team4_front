import { configureStore } from '@reduxjs/toolkit';
import Slice from './Slice';

const store = configureStore({
  reducer: {
    test: Slice.reducer
  }, 
  middleware: getDefaultMiddleware => 
  getDefaultMiddleware({
    serializableCheck: false,
  })
});


export default store;