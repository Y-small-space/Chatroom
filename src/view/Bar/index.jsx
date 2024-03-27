import React from 'react'
import { Avatar, Dropdown, Layout, Menu, Space } from 'antd';
import { CommentOutlined, LogoutOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLayout } from '../Layout/index';
import style from './bar.module.css';
const { Header } = Layout;


const items1 = [
  {
    label: 'Chat',
    key: 'chat',
    icon: <CommentOutlined />
  },
  {
    label: 'Contacts',
    key: 'contacts',
    icon: <TeamOutlined />,

  }
]
const items = [
  {
    label: 'Profile',
    key: 'showprofile',
    icon: <UserOutlined />
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: <LogoutOutlined />
  }
]

const userId = sessionStorage.getItem('userId')

export default function Bar() {
  const { setSelectedKey, selectedKey } = useLayout();
  const { avatar } = useSelector(state => state.userMessageReducer.user)
  const navigator = useNavigate()
  const onClick = (e) => {
    navigator(`/layout/${e.key}`)
    setSelectedKey(e.key);
  }
  const userClick = (e) => {
    if (e.key === 'logout') {
      localStorage.clear();
      sessionStorage.clear();
      navigator('/login')
    }
    if (e.key === 'showprofile') {
      navigator('/layout/showprofile');
      setSelectedKey('');
    }
  }
  return (
    <Header
      className={style.header}
    >
      <Menu items={items1}
        className={style.menu}
        onClick={onClick}
        mode="horizontal"
        selectedKeys={[selectedKey]}
      />
      <div className={style.userid}>
        ChatID: {userId}
      </div>
      <Dropdown
        menu={{
          items,
          onClick: userClick,
        }}
      >
        <Space>
          <Avatar size={60} src={`http://localhost:4000${avatar}`} className={style.avatar}></Avatar>
        </Space>
      </Dropdown>
    </Header>
  )
}
