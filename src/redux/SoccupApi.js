import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../utils/constants/Config';

// 무슨 api일까요....?
export const getSearchData = createAsyncThunk(
  'Slice/getData',
  async (name) => {
    const resp = await axios.get( API_URL + "/player/?name=" + {name},
    {
      headers: {
        "Content-Type" : `application/json`,
      },
    });
    console.log(name)
    return resp.data
  }
);