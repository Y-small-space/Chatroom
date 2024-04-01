import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../view/Login";
import Chat from "../view/Chat";
import Register from "../view/Register";
import Contacts from "../view/Contacts";
import Layouts from "../view/Layout";
// import UserDetails from "../view/Contacts/UserDetails";
// import NullUser from "../view/Contacts/NullUser";
// import SearchUserPage from "../view/Contacts/SearchUser";
// import ShowProfile from "../view/Profile/ShowProfile";
// import SetProfile from "../view/Profile/SetProfile";
import { lazy, Suspense } from "react";
const ShowProfile = lazy(() => import("../view/Profile/ShowProfile"));
const SetProfile = lazy(() => import("../view/Profile/SetProfile"));
const SearchUserPage = lazy(() => import("../view/Contacts/SearchUser"));
const UserDetails = lazy(() => import("../view/Contacts/UserDetails"));
const NullUser = lazy(() => import("../view/Contacts/NullUser"));

export default function RRouter() {
  // const Register = lazy(() => import("../view/Register"));

  return (
    <Suspense fallback={<div>loading...</div>}>
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
}
