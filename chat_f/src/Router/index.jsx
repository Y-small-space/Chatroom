import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../view/Login';
import Chat from '../view/Chat';
import Register from '../view/Register';
import Contacts from '../view/Contacts';
import Layouts from '../view/Layout';

export default function RRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/layout/*" element={<Layouts />} >
        <Route index element={< Chat />} />
        <Route path="chat" element={<Chat />} />
        <Route path="contacts" element={<Contacts />} >
          <Route path="null" element=
        </Route>
      </Route>
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  )
}

