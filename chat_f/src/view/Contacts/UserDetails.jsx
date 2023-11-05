import React ,{useState}from 'react'
import { Layout, Button, List, Divider, Avatar, Card, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons'
const userId = localStorage.getItem('userId')

export default function UserDetails() {
  const [searchResult, setSearchResult] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const hanleChatButtonClick = async () => {
    try {
      const userId1 = userId;
      const userId2 = selectedUser.username;

      const response = await axios.post('http://localhost:4000/api/createRoom', {
        userId1,
        userId2
      });

      if (response.status === 200) {
        const roomId = response.data.roomId;
        if (!friendList_room.includes(selectedUser.username)) {
          setFriendList_room((prevFriendList) => [...prevFriendList, selectedUser.username]);
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
      >{user.username}</div>
      <Button
        ghost
        size={'large'}
        style={{ width: "100px", marginBottom: "20px" }}
        onClick={hanleChatButtonClick}
      >Chat</Button>
    </div>
  )
}
