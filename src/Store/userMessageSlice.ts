import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios, { AxiosHeaders } from 'axios';
import { User } from "../types";

const userId = sessionStorage.getItem('userId');
const userEtag = sessionStorage.getItem('userEtag');

interface UserMessage {
  user: User;
}

const initialState: UserMessage = {
  user: {
    _id: '',
    phoneNumber: 0,
    password: ''
  }
};

export const fetchUsermessage = createAsyncThunk<User, void, { state: RootState }>(
  'userMessage/fetchUsermessage',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`http://localhost:4000/api/showprofile/${userId}`, {
        headers: {
          'If-None-Match': userEtag,
        }
      });
      if (res.status === 304) {
        // 服务器返回304 Not Modified，说明资源未改变，可以使用本地缓存数据
        // 这里可以从本地存储中获取用户信息数据
        const userMessage = localStorage.getItem('userMessage');
        if (userMessage) {
          const userData = JSON.parse(userMessage);
          // 使用缓存的用户信息数据
          console.log('User data from cache:', userData);
        } else {
          console.log('No cached user data available');
        }
      }
      if (res.status === 200) {
        // 服务器返回200 ok，说明资源已更新，需要更新本地缓存数据
        const userTag = (res.headers as AxiosHeaders).get('Etag');
        sessionStorage.setItem('userEtag', userTag as string);
        const date = new Date(res.data.birthday);
        const formattedDate = date.toLocaleDateString();
        localStorage.setItem('userMessage', JSON.stringify({ ...res.data, birthday: formattedDate }));
        const newDate = { ...res.data, birthday: formattedDate }
        return newDate;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userMessageSlice = createSlice({
  name: 'userMessage',
  initialState,
  reducers: {
    getUserMessage: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsermessage.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { getUserMessage } = userMessageSlice.actions;

export const selectUserMessage = (state: RootState) => state.userMessage.user;

export default userMessageSlice.reducer;
