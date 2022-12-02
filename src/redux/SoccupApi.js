import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../utils/constants/Config';

// 무슨 api일까요....?
export const getSearchData = createAsyncThunk(
  'Slice/getData',
  async (name) => {
    const resp = await axios.post( API_URL + "/player/?name=",
    {name: name},
    {
      headers: {
        "Content-Type" : `application/json`,
      },
    });
    return resp.data
  }
);