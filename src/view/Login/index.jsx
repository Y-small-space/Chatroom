import React, { useState } from 'react';
import { Button, Input, message } from 'antd';
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import sty from "./login.module.css";
import socket from '../../socket';

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState('');
  const navigate = useNavigate();

  function getUserMessage(userId) {
    axios.get(`http://localhost:4000/api/showprofile/${userId}`)
      .then(res => {
        const date = new Date(res.data.birthday);
        const formattedDate = date.toLocaleDateString();
        localStorage.setItem('userMessage', JSON.stringify({ ...res.data, birthday: formattedDate }))
        const { friends } = res.data;

        if (friends) {
          connectToChatRooms(friends, userId);
        }
      })
      .catch((error) => {
        console.log('Axios请求失败：', error)
      })
  }

  const createOrGetRoomId = async (userId, userId2) => {
    try {
      const response = await fetch('http://localhost:4000/api/roomId', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId1: Number(userId), userId2 }),
      });

      if (!response.ok) {
        throw new Error('获取房间ID失败');
      }

      const data = await response.json();
      return data.roomId;
    } catch (error) {
      console.error('获取房间ID时出错：', error);
      throw error;
    }
  };

  const connectToChatRooms = async (friends, userId) => {
    friends?.forEach(async (item) => {
      const newroomId = await createOrGetRoomId(userId, item.phoneNumber);
      if (newroomId) {
        sessionStorage.setItem(String(item?.phoneNumber), String(newroomId));
        socket.emit('join', newroomId);
      }
    });
    console.log('登录成功！');
    message.success('登录成功！');
    navigate('/layout');
  };

  const handleLogin = async () => {
    console.log('PhoneNumber:', phoneNumber);

    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, password })
      });

      if (response.ok) {
        const authorizationHeader = response.headers.get('Authorization');
        console.log(authorizationHeader);
        if (authorizationHeader) {
          sessionStorage.setItem('userId', phoneNumber);
          sessionStorage.setItem('token', authorizationHeader);
          getUserMessage(phoneNumber);
        }
      } else {
        setIsError("账号或者密码有误！请重新尝试！");
        message.error("账号或者密码有误！请重新尝试");
        console.error('登录失败！');
      }
    } catch (error) {
      console.error('发生错误：', error);
    }
  }

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  }

  return (
    <div className={sty.login}>
      <div className={sty.logincontent}>
        <div className={sty.loginfonts}>
          Login
        </div>
        <Input
          size='large'
          placeholder='input id'
          style={{
            width: '70%',
            marginTop: '10%'
          }}
          status={isError ? 'error' : ''}
          onChange={(e) => setPhoneNumber(e.target.value)}
          suffix={<UserOutlined />}
        ></Input>
        <Input.Password
          size='large'
          placeholder="input password"
          style={{
            width: '70%',
            marginTop: '8%'
          }}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleEnterKey}
          status={isError ? 'error' : ''}
        />
        <button
          onClick={handleLogin}
          style={{
            width: '70%',
            height: '10%',
            backgroundColor: '#fa541c',
            color: 'white',
            border: '0px',
            borderRadius: '0.5rem',
            marginTop: '10%',
            fontSize: '1rem'
          }}>Login</button>
        <Button
          style={{
            fontSize: '12px',
            marginTop: '20px'
          }}
          type='link'
          href='/register'
        >Register<ArrowRightOutlined /></Button>
      </div>
    </div >
  )
}
