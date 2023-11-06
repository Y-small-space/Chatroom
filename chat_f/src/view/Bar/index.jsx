import React from 'react'
import { Avatar, Layout, Menu } from 'antd';
import { CommentOutlined, TeamOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
const { Header } = Layout;


const items = [
  {
    label: 'Chat',
    key: 'chat',
    icon: <CommentOutlined />
  },
  {
    label: 'Contacts',
    key: 'contacts',
    icon: <TeamOutlined />
  }
]

const userId = localStorage.getItem('userId')

export default function Bar() {
  const navigator = useNavigate()
  const onClick = (e) => {
    navigator(`/layout/${e.key}`)
  }

  return (
    <Header
      style={{
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "rgb(255,255,255,0.5)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <Menu items={items} style={{ marginLeft: "100px", backgroundColor: "transparent", fontSize: '18px' }} onClick={onClick} mode='horizontal' />
      <Avatar size={50} style={{ float: 'right', marginRight: '30px' }}>{userId}</Avatar>
    </Header>
  )
}
