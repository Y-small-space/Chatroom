import { configureStore, combineReducers, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import userMessageReducer from "./userMessageSlice"; // 引入fetchUsermessage
import allhistoryReducer from "./allhistorySlice"; // 引入fetchChatHistory

const rootReducer = combineReducers({
  allhistory: allhistoryReducer,
  userMessage: userMessageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }),
});

// 更新AppThunk类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
