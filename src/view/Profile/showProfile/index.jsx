import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Button, Upload, message, Avatar } from 'antd';
import { LoadingOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from 'react-redux';
import getUserMessageAction from '../../../Store/actionCreator/getUserMessageAction.js'
import style from './showprofile.module.css';
const { Content } = Layout;

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const userId = sessionStorage.getItem("userId");
export default function ShowProfile() {
  const navigate = useNavigate();
  // const { roomId, birthday, gender, phoneNumber, occupation, avatar } = JSON.parse(localStorage.getItem(userId)) || {};
  const { roomId, birthday, gender, phoneNumber, occupation, avatar } = useSelector(state => state.userMessageReducer.user)
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const dispatch = useDispatch();


  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const setProfile = () => {
    navigate('/layout/setprofile')
  }

  useEffect(() => {
    dispatch(getUserMessageAction());
  }, [])

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
    <Content
      className={style.main}
    >
      <Layout
        className={style.layout}
      >
        <h1
          style={{
            textAlign: 'center',
            marginBottom: '3%'
          }}
        >Profile</h1>
        <div
          style={{
            marginBottom: '1%'
          }}>
          <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            action={`http://localhost:4000/api/upload-avatar/${userId}`}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl || avatar ? (
              <Avatar size={100} src={`http://localhost:4000${avatar}`} icon={<UserOutlined />} />
            ) : (
              uploadButton
            )}
          </Upload>
        </div>
        <div style={{ width: '30%', fontSize: '1.5rem', marginBottom: '10%', marginTop: '1%' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <div>ChatID:</div>
            <div>{roomId}</div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <div>Gender:</div>
            <div>{gender}</div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <div>Birthday:</div>
            <div>{birthday}</div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <div>PhoneNumber:</div>
            <div>{phoneNumber}</div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <div>Occupation:</div>
            <div>{occupation}</div>
          </div>
        </div>
        <Button
          type="link"
          onClick={setProfile}
        >
          SetProfile
        </Button>
      </Layout>
    </Content >
  )
}
