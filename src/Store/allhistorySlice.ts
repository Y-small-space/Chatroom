import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { Message } from '../types';

interface AllHistoryState {
  chatHistory: Message[];
}

const initialState: AllHistoryState = {
  chatHistory: [],
};

export const fetchChatHistory = createAsyncThunk<Message[], void, { state: RootState }>(
  'history/fetchChatHistory',
  async (_, thunkAPI) => {
    try {
      const userId = sessionStorage.getItem('userId');
      const storedETag = localStorage.getItem('chatHistoryETag'); // 获取存储的ETag
      const headers = storedETag ? { 'If-None-Match': storedETag } : {}; // 如果有存储的ETag，则发送到后端进行比较

      const res = await axios.get(`http://localhost:4000/api/chatHistory/${userId}`, {
        headers: headers // 将存储的ETag添加到请求头中
      });

      if (res.status === 304) {
        // 如果返回304 Not Modified，则表示资源未修改，可以使用本地缓存数据
        const cachedData = JSON.parse((localStorage.getItem('cachedChatHistory') as string));
        return cachedData;
      } else {
        // 如果返回200 OK，则更新存储的ETag和缓存数据
        const newETag = res.headers['etag']; // 获取后端返回的ETag
        const chatHistory = res.data; // 获取后端返回的聊天历史记录
        localStorage.setItem('chatHistoryETag', newETag); // 更新存储的ETag
        localStorage.setItem('cachedChatHistory', JSON.stringify(chatHistory)); // 更新缓存数据
        return chatHistory;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const allhistorySlice = createSlice({
  name: 'allhistory',
  initialState,
  reducers: {
    setChatHistory: (state, action: PayloadAction<Message[]>) => {
      state.chatHistory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChatHistory.fulfilled, (state, action) => {
      state.chatHistory = action.payload;
    });
  },
});

export const { setChatHistory } = allhistorySlice.actions;

export const selectChatHistory = (state: RootState) => state.allhistory.chatHistory;

export default allhistorySlice.reducer;
