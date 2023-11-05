import React, { useState, useEffect,useCallback} from 'react'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component'
import { Layout, Button, List, Divider, Avatar} from 'antd';
import store from '../../Redux/store'
import { Outlet, useNavigate } from 'react-router-dom'
import { useFriendList } from '../Layout/index'
import getContactListAction from '../../Redux/actionCreator/getContactListAction';
const { Content, Sider } = Layout;

const userId = localStorage.getItem('userId')

export default function Contacts() {
  const [isClick, setIsClick] = useState(false);
  const [firendList, setFriendList] = useState(store.getState().contactReducer.user);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const { friendList_room, setFriendList_room } = useFriendList()

  useEffect(() => {
    LoadContactList()
  }, [])

  const handleAddFriends = () => {
    setIsClick(!isClick);
  }

  const LoadContactList = () => {
    setLoading(true)
    try {
      if (store.getState().contactReducer.user.length === 0) {
        // 如果联系人列表为空，才触发加载操作
        store.dispatch(getContactListAction());
        store.subscribe(() => {
          setFriendList(store.getState().contactReducer.user)
        })
      }
    } catch (error) {
      console.error('加载联系人列表时出错：', error);
    } finally {
      setLoading(false)
    }
  };



  return (
    <Content
      style={{
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
            <Button size='large' onClick={handleAddFriends} ghost style={{ width: '100%', borderColor: 'rgba(140, 140, 140, 0.35)', marginTop: '10px' }}>ADD</Button>
            <InfiniteScroll
              dataLength={firendList.length}
              next={LoadContactList}
              hasMore={firendList.length < 50}
              endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
              scrollableTarget="scrollableDiv"
            >
              <List
                dataSource={firendList}
                renderItem={(item) => (
                  <List.Item >
                    <List.Item.Meta
                      avatar={<Avatar size={30} style={{ backgroundColor: "rgb(0,150,255)" }}>{item.username}</Avatar>}
                      title={item.username}
                    />
                    <div onClick={
                      () => {
                        setIsClick(false)
                        setSelectedUser(item)
                      }}>Content</div>
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </div>
        </Sider>
        <Content>
          <Outlet/>
        </Content>
      </Layout>
    </Content>
  )
}