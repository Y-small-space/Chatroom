import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout, Avatar, Card } from "antd";
import { v4 as uuidv4 } from "uuid";
import socket from "../../socket/index.js";
import { useLayout } from "../Layout/index";
import TextArea from "antd/es/input/TextArea";
import style from "./chat.module.css";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "./userCard/index.jsx";
import getAllhistoryAction from "../../Store/actionCreator/getAllhistoryAction.js";
const { Content, Sider } = Layout;
const myId = sessionStorage.getItem("userId");

export default function Chat() {
  const { userid } = useParams();
  const { friendList_room } = useLayout();
  const [currentRoomId, setCurrentRoomId] = useState("");
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [selectUser_chat, setSelectUser_chat] = useState(+userid);
  const allChatHistory = useSelector(
    (state) => state.allhistoryReducer.chatHistory
  );
  const [showHistory, setShowHistory] = useState([]);
  const userList = useSelector((state) => state.userMessageReducer.user);
  const dispatch = useDispatch();

  const sendMessage = (e) => {
    // 如果按下了 Shift 键和 Enter 键
    if (e.shiftKey && e.keyCode === 13) {
      // 换行，不触发发送消息的逻辑
    } else if (e.keyCode === 13 && currentRoomId) {
      e.preventDefault(); // 阻止默认的换行行为

      if (typeof message === "string" && message.trim() !== "") {
        const messageObj = {
          sender: userList._id,
          receiver: selectUser_chat,
          content: message,
          roomId: currentRoomId,
          sender_username: myId,
          avatar_sender: userList.avatar,
          receiver_username: String(selectUser_chat)
        };
        console.log("sending message:", messageObj);
        socket.emit("message", messageObj);
        setMessage("");
        setShowHistory([messageObj, ...showHistory])
      }
    }
  };

  useEffect(() => {
    if (Array.isArray(allChatHistory)) {
      const newChatHistory = [...allChatHistory].reverse();
      setChatHistory(newChatHistory);
    }
  }, [allChatHistory]);

  // 监听后端messge
  useEffect(() => {
    dispatch(getAllhistoryAction());
    console.log('====================================');
    console.log('loading:message');
    console.log('====================================');
    socket.on("message", (incomingMessage) => {
      console.log("incommingMessage:", incomingMessage);
      setChatHistory((prevHistory) => {
        if (prevHistory.every((item) => item._id !== incomingMessage._id)) {
          return [incomingMessage, ...prevHistory];
        } else {
          return prevHistory;
        }
      });
    });
  }, []);

  // 拿到当前所选用户的roomId
  useEffect(() => {
    setCurrentRoomId(sessionStorage.getItem(String(selectUser_chat)))
  }, [selectUser_chat, friendList_room]);

  useEffect(() => {
    const newChatHistory = chatHistory.filter((message) => {
      return (
        (message.sender_username === String(myId) &&
          message.receiver_username === String(selectUser_chat)) ||
        (message.sender_username === String(selectUser_chat) &&
          message.receiver_username === String(myId))
      );
    });
    setShowHistory(newChatHistory);
  }, [chatHistory, selectUser_chat]);

  useEffect(() => {
    console.log(showHistory);
  }, [showHistory]);

  const NullUser = () => {
    return (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          textAlign: "center",
          marginLeft: "20px",
          marginRight: "20px",
          backgroundColor: "transparent",
          border: "1px solid rgba(140, 140, 140, 0.35)",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "10rem",
            color: "rgb(100,100,100)",
          }}
        >
          CHAT
        </div>
      </div>
    );
  };

  return (
    <Content className={style.main}>
      <Layout className={style.layout}>
        <Sider
          width={400}
          style={{
            backgroundColor: "transparent",
            fontSize: "20px",
            height: "100%",
          }}
        >
          <div
            id="scrollableDiv"
            style={{
              height: "100%",
              overflow: "auto",
              padding: "0 16px",
              marginLeft: "20px",
              border: "1px solid rgba(140, 140, 140, 0.35)",
            }}
          >
            {Array.isArray(userList.friends) &&
              userList.friends.map((item) => {
                return (
                  <UserCard
                    user={item}
                    selectUser_chat={selectUser_chat}
                    setSelectUser_chat={setSelectUser_chat}
                    showHistory={showHistory}
                    chatHistory={chatHistory}
                  />
                );
              })}
          </div>
        </Sider>
        {selectUser_chat ? (
          <Content>
            <div
              style={{
                height: "70%",
                padding: "0 10px",
                margin: "0 20px",
                marginLeft: "2%",
                marginRight: "2%",
                backgroundColor: "transparent",
                borderRadius: "0",
                border: `${selectUser_chat
                  ? "1px solid white"
                  : "1px solid rgba(140, 140, 140, 0.35)"
                  } `,
                display: "flex",
                flexDirection: "column-reverse",
                overflow: "auto",
              }}
            >
              {Array.isArray(showHistory) &&
                showHistory.map((message) => {
                  const isSentByUser = message.sender_username === myId;
                  return (
                    <div
                      key={message._id}
                      style={{
                        display: "flex",
                        flexDirection: `${isSentByUser ? "row-reverse" : "row"
                          } `,
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        style={{ backgroundColor: "rgb(0,150,255)" }}
                        size={46}
                        src={`http://localhost:4000${message.avatar_sender}`}
                      ></Avatar>
                      <Card
                        size="small"
                        key={uuidv4()}
                        style={{
                          margin: "10px",
                          padding: "1.2%",
                          maxWidth: "60%",
                          wordBreak: "break-word",
                        }}
                      >
                        {message.content}
                      </Card>
                    </div>
                  );
                })}
            </div>
            {selectUser_chat && (
              <TextArea
                rows={4}
                placeholder="Enter ->"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                onPressEnter={sendMessage}
                value={message}
                style={{
                  height: "30%",
                  width: "96%",
                  backgroundColor: "transparent",
                  marginLeft: "2%",
                  borderRadius: "0",
                  border: `${selectUser_chat
                    ? "1px solid white"
                    : "1px solid rgba(140, 140, 140, 0.35)"
                    } `,
                  borderTop: "0px",
                  resize: "none",
                }}
              />
            )}
          </Content>
        ) : (
          <NullUser />
        )}
      </Layout>
    </Content>
  );
}
