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
      const res = await axios.get<Message[]>(`http://localhost:4000/api/chatHistory/${userId}`);
      return res.data;
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
