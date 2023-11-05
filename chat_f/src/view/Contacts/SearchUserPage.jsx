import React, { useState, useEffect, useCallback } from 'react'
import { Layout, Button, List, Divider, Avatar, Card, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import axios from 'axios';

const userId = localStorage.getItem('userId')
export default function SearchUserPage() {
  const [searchResult, setSearchResult] = useState(null);
  const [searchUser, setSearchUser] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isClickSearch, setIsClickSearch] = useState(false);
  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      SearchUser();
      setIsClickSearch(!isClickSearch);
      setSearchUser('')
    }
  }
    // 添加好友
    const AddFriends = async (friendId) => {
      try {
        const response = await axios.post('http://localhost:4000/api/addFriends',
          {
            userIdToAdd: friendId,
            currentUserId: userId
          });
        console.log(friendId, userId);
        const message = response.data.message;
        console.log(message);
        setSuccessMessage(message);
        LoadContactList();
      } catch (error) {
        setErrorMessage(`${error.message}`)
        console.error('添加好友失败', error);
      }
    }

  // 搜索好友
  const SearchUser = async () => {
    setSuccessMessage('');
    setErrorMessage('');
    try {
      const response = await axios.get(`http://localhost:4000/api/search?query=${searchUser}`);
      setSearchResult(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('搜索失败：', error)
    }
  }
  return (
    <Card
      style={{
        display: 'flex',
        height: '100%',
        marginLeft: '20px',
        marginRight: '20px',
        backgroundColor: "transparent",
        border: '1px solid rgba(140, 140, 140, 0.35)',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <Input
        size="large"
        style={{ width: '500px' }}
        onChange={e => setSearchUser(e.target.value)}
        onKeyDown={handleEnterKey}
      ></Input>
      {searchResult &&
        <Card
          style={{ width: '500px', marginTop: '20px', height: '280px', backgroundColor: '' }}
        >
          <Avatar style={{ margin: '30px', backgroundColor: 'rgb(0,150,255)' }} size={70}>{searchResult[0]?.username}</Avatar>
          <Card.Meta
            description={searchResult[0]?.username}
            title=''
          />
          <Button onClick={AddFriends} style={{ marginTop: '10px', border: "0", backgroundColor: 'rgb(100,100,100,0.5)' }}>ADD</Button>
        </Card>}
    </Card>
  )
}

