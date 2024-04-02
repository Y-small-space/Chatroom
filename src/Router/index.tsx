import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Spin } from "antd"; // 引入 Spin 用于加载状态
import Login from "../view/Login";
import Register from "../view/Register";
import Contacts from "../view/Contacts";
import Layouts from "../view/Layout";
import NullUser from "../view/Contacts/NullUser";

// 懒加载
const ShowProfile = lazy(
  () => import(/* webpackChunkName:"layout" */ "../view/Profile/ShowProfile")
);
const SetProfile = lazy(
  () => import(/* webpackChunkName:"layout" */ "../view/Profile/SetProfile")
);
const SearchUserPage = lazy(
  () => import(/* webpackChunkName:"layout" */ "../view/Contacts/SearchUser")
);
const UserDetails = lazy(
  () => import(/* webpackChunkName:"layout" */ "../view/Contacts/UserDetails")
);
const Chat = lazy(() => import(/* webpackChunkName:"layout" */ "../view/Chat"));

const RRouter: React.FC = () => {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/layout/*" element={<Layouts />}>
          <Route index element={<Contacts />} />
          <Route path="chat" element={<Chat />} />
          <Route path="chat/:userid" element={<Chat />} />
          <Route path="contacts/*" element={<Contacts />}>
            <Route index element={<NullUser />} />
            <Route path="null" element={<NullUser />} />
            <Route path="userdetails/:userid" element={<UserDetails />} />
            <Route path="seachuser" element={<SearchUserPage />} />
          </Route>
          <Route path="showprofile" element={<ShowProfile />} />
          <Route path="setprofile" element={<SetProfile />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  );
};

export default RRouter;
