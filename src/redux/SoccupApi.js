import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../utils/constants/Config';


// 선수 상세페이지
export const getSearchData = createAsyncThunk(
  'Slice/getSearchData',
  async (name) => {
    console.log(name)
    const resp = await axios.get(API_URL + "/player/?name=" + {name},
    {
      headers: {
        "Content-Type" : `application/json`,
      },
    }
    );
    return resp.data
  }
);


// 모든 선수 정보 가져오기
export const getAllPlayer = createAsyncThunk(
  'Slice/getAllPlayer',
  async () => {
    const resp = await axios.get(API_URL+"/player/1",
    {
      headers: {
        "Content-Type" : `application/json`,
      },
    }
    );
    return resp.data
  }
); 



// 선수 상세페이지
// export const getSearchData = createAsyncThunk(
//   'Slice/getSearchData',
//   async (name) => {
//     const resp = await axios.get(API_URL+"/player/1",
//     {
//       headers: {
//         "Content-Type" : `application/json`,
//       },
//     }
//     );
//     return resp.data
//   }
// );
