import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
const myId = sessionStorage.getItem("userId");

export default function UserCard(props: {
  selectUser_chat: any;
  setSelectUser_chat: any;
  user: any;
  chatHistory: any;
  showHistory: any;
}) {
  const {
    selectUser_chat,
    setSelectUser_chat,
    user,
    chatHistory,
    showHistory,
  } = props;
  const [currentHistory, setCurrentHistroy] = useState();
  useEffect(() => {
    console.log("====================================");
    console.log("show", chatHistory);
    console.log("====================================");
    if (selectUser_chat.phoneNumber !== user.phoneNumber) {
      const newChatHistory = chatHistory.filter(
        (message: { sender_username: string; receiver_username: string }) => {
          return (
            (message.sender_username === String(myId) &&
              message.receiver_username === String(user.phoneNumber)) ||
            (message.sender_username === String(user.phoneNumber) &&
              message.receiver_username === String(myId))
          );
        }
      );
      setCurrentHistroy(newChatHistory[0]?.content);
    } else {
      const newChatHistory = showHistory.filter(
        (message: { sender_username: string; receiver_username: string }) => {
          return (
            (message.sender_username === String(myId) &&
              message.receiver_username === String(user.phoneNumber)) ||
            (message.sender_username === String(user.phoneNumber) &&
              message.receiver_username === String(myId))
          );
        }
      );
      setCurrentHistroy(newChatHistory[0]?.content);
    }
  }, [chatHistory]);
  return (
    <div>
      <Card
        style={{
          marginTop: "1rem",
          padding: "1%",
          backgroundColor: `${
            user.phoneNumber === selectUser_chat ? "transparent" : ""
          }`,
        }}
        key={user._id}
        onClick={() => setSelectUser_chat(user.phoneNumber)}
      >
        <Avatar
          src={`http://localhost:4000${user.avatar}`}
          icon={<UserOutlined />}
          size={50}
          style={{ float: "left" }}
        />
        <div style={{ marginLeft: "20%" }}>
          <div style={{ lineHeight: "2.2rem", fontSize: "1.5rem" }}>
            {user.phoneNumber}
          </div>
          <div
            style={{ lineHeight: "1.1rem", fontSize: "1.0rem", color: "gray" }}
          >
            {currentHistory}
          </div>
        </div>
      </Card>
    </div>
  );
}
