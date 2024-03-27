import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../view/Login';
import Chat from '../view/Chat';
import Register from '../view/Register';
import Contacts from '../view/Contacts';
import Layouts from '../view/Layout';
import NullUser from '../view/Contacts/NullUser';
import UserDetails from '../view/Contacts/UserDetails';
import SearchUserPage from '../view/Contacts/SearchUserPage';
import SetProfile from '../view/Profile/setProfile';
import ShowProfile from '../view/Profile/showProfile';

export default function RRouter() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/layout/*' element={<Layouts />} >
        <Route index element={< Contacts />} />
        <Route path='chat' element={<Chat />} />
        <Route path='chat/:userid' element={<Chat />} />
        <Route path='contacts/*' element={<Contacts />} >
          <Route index element={<NullUser />} />
          <Route path='null' element={<NullUser />} />
          <Route path='userdetails/:userid' element={<UserDetails />} />
          <Route path='seachuser' element={<SearchUserPage />} />
        </Route>
        <Route path='showprofile' element={<ShowProfile />} />
        <Route path='setprofile' element={<SetProfile />} />
      </Route>
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  )
}

