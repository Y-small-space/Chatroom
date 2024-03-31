import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { User } from "../types";

const userId = sessionStorage.getItem('userId');

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
      const res = await axios.get(`http://localhost:4000/api/showprofile/${userId}`);
      const date = new Date(res.data.birthday);
      const formattedDate = date.toLocaleDateString();
      localStorage.setItem('userMessage', JSON.stringify({ ...res.data, birthday: formattedDate }));
      return res.data;
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
