import React from 'react'
import { Button } from 'antd';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useFriendList } from '../Layout/index'
import axios from 'axios';
const userId = localStorage.getItem('userId')

export default function UserDetails() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedUser = searchParams.get('id')
  const { friendList_room, setFriendList_room } = useFriendList()
  const navigate = useNavigate()

  const hanleChatButtonClick = async () => {
    try {
      const userId1 = userId;
      const userId2 = selectedUser;

      const response = await axios.post('http://localhost:4000/api/createRoom', {
        userId1,
        userId2
      });

      if (response.status === 200) {
        const roomId = response.data.roomId;
        if (!friendList_room.includes(selectedUser)) {
          setFriendList_room((prevFriendList) => [selectedUser, ...prevFriendList,]);
          // console.log(friendList_room)
        }
        navigate(`/layout/chat?selectedUser=${userId2}&roomId=${roomId}`);
      }
    } catch (error) {
      console.error('发生错误：', error);
    }
  }

  return (
    <div style={{
      display: 'flex',
      height: '100%',
      textAlign: 'center',
      marginLeft: '20px',
      marginRight: '20px',
      backgroundColor: "transparent",
      border: '1px solid rgba(140, 140, 140, 0.35)',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div
        style={{
          marginBottom: '280px',
          fontSize: '50px'
        }}
      >{selectedUser}</div>
      <Button
        ghost
        size={'large'}
        style={{ width: "100px", marginBottom: "20px" }}
        onClick={hanleChatButtonClick}
      >Chat</Button>
    </div>
  )
}
