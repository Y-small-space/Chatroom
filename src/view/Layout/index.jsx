import React, { useState, useContext, createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getUserMessageAction from '../../Store/actionCreator/getUserMessageAction';
import getAllhistoryAction from '../../Store/actionCreator/getAllhistoryAction'
import { Outlet, } from 'react-router-dom';
import { Layout } from 'antd';
import Bar from '../Bar';
import socket from '../../socket/index.js';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./index.css"
const { Footer } = Layout;
const LayoutContext = createContext();

const Layouts = () => {
  const contactList = useSelector(state => state.userMessageReducer.user);
  const [friendList_room, setFriendList_room] = useState([]);
  const [selectedKey, setSelectedKey] = useState('login');
  const [roomId, setRoomId] = useState([]);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const userMessage = localStorage.getItem("userMessage");
  const { friends } = JSON.parse(userMessage);
  const userId = sessionStorage.getItem('userId');

  useEffect(() => {
    const jwt = sessionStorage.getItem('token');
    if (!jwt) {
      navigator('/login')
    } else {
      dispatch(getUserMessageAction());
      dispatch(getAllhistoryAction());
    }
    console.log('====================================');
    console.log('usermessage', userMessage);
    console.log('====================================');

    const connectToChatRooms = async (friends) => {
      friends?.forEach(async (item) => {
        const roomId = sessionStorage.getItem(String(item.phoneNumber));
        if (roomId) {
          socket.emit('join', roomId);
        } else {
          const response = await fetch('http://localhost:4000/api/roomId', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId1: Number(userId), userId2: String(item.phoneNumber) }),
          });
          if (response.status === 200) {
            const data = await response.json();
            const { roomId } = data;
            sessionStorage.setItem(String(item.phoneNumber), String(roomId))
            socket.emit("join", String(roomId));
          }
        }
      });
    };



    connectToChatRooms(friends, userId);

    return () => {
      socket.off('message');
    };
  }, [])

  useEffect(() => {
    contactList.friends?.forEach(async (item) => {
      const roomId = sessionStorage.getItem(String(item?.phoneNumber));
      socket.emit('join', roomId);
    });
  })

  return (
    <LayoutContext.Provider value={{ friendList_room, setFriendList_room, selectedKey, setSelectedKey, roomId, setRoomId }}>
      <Layout className='layout' >
        <Bar />
        <Outlet />
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor: 'transparent',
            color: 'white',
            height: '9%'
          }}
        >
          Chat Room ©2023 Created by JY
        </Footer>
      </Layout>
    </LayoutContext.Provider>
  );
};
export default Layouts;

export function useLayout() {
  return useContext(LayoutContext);
}