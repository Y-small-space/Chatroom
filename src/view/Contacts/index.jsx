import React from 'react';
import { Layout, Button, Card, Avatar } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import style from './contact.module.css';
const { Content, Sider } = Layout;



export default function Contacts() {
  const navigate = useNavigate();
  const contactList = useSelector(state => state.userMessageReducer.user);

  const handleAddFriends = () => {
    navigate('/layout/contacts/seachuser');
  }

  const toUserDetials = (userid) => {
    navigate(`/layout/contacts/userdetails/${userid}`);
  }

  return (
    <Content
      className={style.main}
    >
      <Layout
        className={style.layout}
      >
        <Sider
          width={400}
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
            {
              Array.isArray(contactList?.friends) && contactList.friends.map((item) => {
                return (
                  <Card
                    style={{
                      marginTop: '1rem',
                      padding: '1%',
                    }}
                    onClick={() => toUserDetials(item._id)}
                    key={item._id}
                  >
                    <Avatar src={`http://localhost:4000${item.avatar}`} icon={<UserOutlined />} size={50} style={{ float: "left" }} />
                    <div style={{ marginLeft: '20%' }} >
                      <div style={{ lineHeight: '2.2rem', fontSize: '1.5rem' }}>{item.roomId}</div>
                    </div>
                  </Card>
                )
              })
            }
          </div>
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Content>
  )
}