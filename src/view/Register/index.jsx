import React, { useState } from 'react'
import { Button, Input, message } from 'antd'
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import sty from "./register.module.css";

export default function Register() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  // 提交事件
  const handleRegister = async () => {
    const phoneNumberRegex = /^1\d{10}$/;
    const isValidPhoneNumber = (phoneNumber) => {
      return phoneNumberRegex.test(phoneNumber);
    }
    if (!isValidPhoneNumber(phoneNumber)) {
      message.warning('电话号码格式错误！！！');
      return;
    }
    if (/[!@#$%^&*()]/.test(password)) {
      message.warning('不能包含特殊字符！！！')
      return;
    }
    if (password.length < 8 && password.length > 15) {
      message.warning('密码长度在8位到15位之间！！！');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      message.warning('至少得有一个大写字母！！！');
      return;
    }

    if (!/[a-z]/.test(password)) {
      message.warning('至少得有一个小写字母！！！');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, password }),
      });

      if (response.ok) {
        // 注册成功，可以进行重定向或显示成功消息
        console.log('注册成功！');
        message.success('注册成功！！！')
        navigate('/login')
      } else {
        const data = await response.json();
        if (data.error.includes('用户已经注册')) {
          message.error('您已经注册！！！');
        }
        // 注册失败，处理错误情况
        console.error('注册失败！');
      }
      setPhoneNumber('');
      setPassword('');
    } catch (error) {
      console.error('发生错误：', error);
    }
  };

  return (
    <div className={sty.register}>
      <div className={sty.registercontent}>
        <div className={sty.registerfonts}>
          Register
        </div>
        <Input
          size='large'
          placeholder='phoneNumber'
          style={{
            width: '70%',
            marginTop: '10%'
          }}
          suffix={<UserOutlined />}
          onChange={(e) => setPhoneNumber(e.target.value)}
        ></Input>
        <Input.Password
          size='large'
          placeholder="password"
          style={{
            width: '70%',
            marginTop: '8%'
          }}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          onChange={(e) => setPassword(e.target.value)}
          onPressEnter={handleRegister}
        />
        <button
          style={{
            width: '70%',
            height: '10%',
            backgroundColor: '#fa541c',
            color: 'white',
            border: '0px',
            borderRadius: '0.5rem',
            marginTop: '10%',
            fontSize: '1rem'
          }}
          onClick={handleRegister}
        >Register</button>
        <Button
          style={{
            fontSize: '12px',
            marginTop: '20px'
          }}
          type='link'
          href='/login'
        ><ArrowLeftOutlined />Login</Button>
      </div>

    </div>
  )
}
