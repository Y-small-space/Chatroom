import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component'
import { Layout, Button, List, Skeleton, Divider, Avatar, Card, Input, message } from 'antd';
import { v4 as uuidv4 } from 'uuid'
import io from 'socket.io-client'
import { useFriendList } from '../Layout/index';
import store from '../../Redux/store';
import getAllhistoyAction from '../../Redux/actionCreator/getAllhistoryAction';
import TextArea from 'antd/es/input/TextArea';
const { Content, Sider } = Layout;


const socket = io('http://localhost:4000', { path: '/socket.io' });
const userId = localStorage.getItem('userId');

export default function Chat() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { friendList_room } = useFriendList();
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [selectUser_chat, setSelectUser_chat] = useState('');
  const selectedUser = searchParams.get('selectedUser');
  const roomId = searchParams.get('roomId');
  const [allChatHistory, setAllChatHistory] = useState(store.getState().allhistoryReducer.chatHistory);
  const [receiver_name, setReceiver_name] = useState([]);

  const sendMessage = () => {
    if (typeof message === 'string' && message.trim() !== '') {
      const messageObj = {
        sender: userId,
        receiver: selectUser_chat,
        content: message,
        roomId: roomId,
      };
      console.log("sending message:", messageObj);
      socket.emit('message', messageObj);
      setMessage('');
    }
  }

  const fetchAllChatHistory = async () => {
    try {
      if (store.getState().allhistoryReducer.chatHistory.length === 0) {
        // 如果联系人列表为空，才触发加载操作
        store.dispatch(getAllhistoyAction());
        store.subscribe(() => {
          setAllChatHistory(store.getState().allhistoryReducer.chatHistory)
        })
      }
    } catch (error) {
      console.error('加载历史记录列表时出错：', error);
    }
  };

  // 连接websocket接口
  useEffect(() => {
    setSelectUser_chat(selectedUser)
    socket.emit('join', roomId);
    socket.on('message', (incomingMessage) => {
      setChatHistory((prevHistory) => [incomingMessage, ...prevHistory]);
      setAllChatHistory((prevHistory => [...prevHistory,incomingMessage]))
    })
    return () => {
      socket.off('message');
    };
  }, []);

  // 获取所有使用者的历史聊天记录
  useEffect(() => {
    fetchAllChatHistory();
  }, [])

  // 整理聊天记录中使用者的name
  useEffect(() => {
    const newRecivername = []
    allChatHistory.forEach(item => {
      if (!newRecivername.includes(item.receiver_username) && item.receiver_username !== undefined && item.receiver_username !== userId) {
        newRecivername.push(item.receiver_username)
      }
    })
    friendList_room.forEach(item => {
      if (!newRecivername.includes(item.receiver_username) && item.receiver_username !== undefined && item.receiver_username !== userId) {
        newRecivername.unshift(item.receiver_username)
      }
    })
    setReceiver_name([...newRecivername])
  }, [allChatHistory, friendList_room])

  useEffect(() => {
    const newChatHistory = []
    allChatHistory.forEach(item => {
      if (item.receiver_username === selectUser_chat || (item.receiver_username === userId && item.sender_username === selectUser_chat)) {
        setChatHistory([])
        newChatHistory.unshift(item)
        setChatHistory(newChatHistory)
      }
    })
  }, [allChatHistory, selectUser_chat])

  const userCard = (user) => {
    const newChatHistory = []

    allChatHistory.forEach(item => {
      if ((item.receiver_username === user && item.sender_username === userId) ||
        (item.receiver_username === userId && item.sender_username === user)) {
        newChatHistory.push(item)
      }
    })

    return newChatHistory.pop()?.content
  }

  const NullUser = () => {
    return (
      <div style={{
        display: 'flex',
        width:'100%',
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
            fontSize: '50px',
            color: 'rgb(100,100,100)'
          }}
        >CHAT</div>
      </div>
    )
  }

  return (
    <Content
      style={{
        height: '100%',
        padding: '0 50px',
        marginTop: "30px"
      }}
    >
      <Layout
        style={{
          height: "100%",
          padding: '24px 0',
          backgroundColor: "rgb(255,255,255,0.5)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)"
        }}
      >
        <Sider
          width={300}
          style={{
            backgroundColor: "transparent",
            fontSize: '20px'
          }}
        >
          <div
            id="scrollableDiv"
            style={{
              height: "100%",
              overflow: 'auto',
              padding: '0 16px',
              marginLeft: '20px',
              border: '1px solid rgba(140, 140, 140, 0.35)',
            }}
          >
            <InfiniteScroll
              dataLength={receiver_name.length}
              hasMore={receiver_name.length < 50}
              endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
              scrollableTarget="scrollableDiv"
            >
              <List
                dataSource={receiver_name}
                renderItem={(item) => (
                  <List.Item key={uuidv4()} onClick={() => { setSelectUser_chat(item) }} style={{ overflow: 'hidden' }}>
                    <List.Item.Meta
                      avatar={<Avatar style={{ backgroundColor: "rgb(0,150,255)" }}>{item}</Avatar>}
                      title={item}
                      description={userCard(item)}
                    />
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </div>
        </Sider>
        {selectUser_chat ? <Content>
          <div
            style={{
              height: `${selectUser_chat ? '80%' : '100%'}`,
              padding: '0 10px',
              margin: "0 20px",
              backgroundColor: "transparent",
              borderRadius: "0",
              border: "1px solid rgba(140, 140, 140, 0.35)",
              display: 'flex',
              flexDirection: 'column-reverse',
              overflow: 'auto',
            }}
          >
            {
              chatHistory.map((message) => {
                const isSentByUser = message.sender_username === userId;
                return (
                  <div key={uuidv4()} style={{ display: 'flex', flexDirection: `${isSentByUser ? 'row-reverse' : 'row'}`, alignItems: 'center' }}>
                    <Avatar style={{ backgroundColor: "rgb(0,150,255)" }} size={40}>{message.sender_username}</Avatar>
                    <Card size='small' key={uuidv4()} style={{ margin: '10px', width: "600px", wordBreak: 'break-word' }}>
                      {message.content}
                    </Card>
                  </div>

                )
              })
            }
          </div>
          {
            selectUser_chat && <TextArea
              rows={4}
              placeholder='Enter ->'
              onChange={(e) => { setMessage(e.target.value) }}
              onPressEnter={sendMessage}
              value={message}
              style={{
                minHeight: '20%',
                width: '96.1%',
                backgroundColor: 'transparent',
                marginLeft: '20px',
                borderRadius: '0',
                borderTop: '0px',
                borderColor: "rgba(140, 140, 140, 0.35)",
                resize: 'none'
              }} />}
        </Content> : <NullUser/>}
      </Layout>
    </Content>
  )
}
