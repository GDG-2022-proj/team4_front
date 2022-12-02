import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../utils/constants/Config';

// 무슨 api일까요....?
export const getData = createAsyncThunk(
  'Slice/getData',
  async () => {
    const resp = await axios.post( API_URL + "/",
    {
      headers: {
        "Content-Type" : `application/json`,
      },
    });
    return resp.data
  }
);