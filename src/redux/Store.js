import { configureStore } from '@reduxjs/toolkit';
import Slice from './Slice';

const store = configureStore({
  reducer: {
    searchKeyword: Slice.reducer,
    readAllPlayer: Slice.reducer
  }, 
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: false,
    })
});


export default store;