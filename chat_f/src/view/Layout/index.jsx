import React, { useState, useContext, createContext } from 'react';
import "./index.css"
import { Layout } from 'antd';
import Bar from '../Bar';
import { Outlet } from 'react-router-dom'
const { Footer } = Layout;

const FriendListContext = createContext();

const Layouts = () => {
  const [friendList_room, setFriendList_room] = useState([]);
  const [contactsRoomId, setContactsRoomId] = useState({});

  return (
    <FriendListContext.Provider value={{ friendList_room, setFriendList_room, contactsRoomId, setContactsRoomId }}>
      <Layout className='layout' >
        <Bar />
        <Outlet />
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor: 'transparent',
            color: 'white'
          }}
        >
          Chat Room ©2023 Created by JY
        </Footer>
      </Layout>
    </FriendListContext.Provider>

  );
};
export default Layouts;

export function useFriendList() {
  return useContext(FriendListContext);
}