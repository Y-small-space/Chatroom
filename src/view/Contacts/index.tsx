import React, { useEffect } from "react";
import { Layout, Button, Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLayout } from "../Layout/index";
import style from "./contact.module.css";
import socket from "../../socket/index";
import { RootState } from "../../Store/store";
import { Friend, RoomId } from "../../types";
import { api } from "../../api/api";
const { Content, Sider } = Layout;
const userId = sessionStorage.getItem("userId");

export default function Contacts() {
  const navigate = useNavigate();
  const { roomId, setRoomId } = useLayout();
  const contactList = useSelector((state: RootState) => state.userMessage.user);
  const handleAddFriends = () => {
    navigate("/layout/contacts/seachuser");
  };

  const toUserDetials = (userid: string) => {
    navigate(`/layout/contacts/userdetails/${userid}`);
  };

  const createOrGetRoomId = async (userId2: string) => {
    try {
      const response: any = await api.post("http://localhost:4000/api/roomId", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId1: Number(userId), userId2 }),
      });

      if (response.status === 404) {
        throw new Error("用户不存在");
      }

      const data = await response.json();
      return data.roomId;
    } catch (error) {
      console.error("获取房间ID时出错：", error);
      throw error;
    }
  };

  useEffect(() => {
    const connectToChatRooms = async (friends: Friend[]) => {
      friends.forEach(async (item) => {
        const newroomId = await createOrGetRoomId(String(item.phoneNumber));
        const roomid = {
          myid: userId,
          otherid: String(item.phoneNumber),
          roomid: newroomId,
        };

        // 检查是否已经包含相同的房间信息
        if (
          !roomId.some(
            (existingRoom: RoomId) =>
              existingRoom?.myid === roomid.myid &&
              existingRoom?.otherid === roomid.otherid &&
              existingRoom?.roomid === roomid.roomid
          )
        ) {
          const newRoomID = [...roomId, roomid];
          setRoomId(newRoomID as RoomId[]);
          socket.emit("join", newroomId);
        }
      });
    };
    try {
      const friends = Array.isArray(contactList?.friends)
        ? contactList.friends
        : [];
      console.log("userId:", userId);
      connectToChatRooms(friends);
    } catch (error) {
      console.log("connect error:", error);
    }
  }, []);

  return (
    <Content className={style.main}>
      <Layout className={style.layout}>
        <Sider
          width={400}
          style={{
            backgroundColor: "transparent",
            fontSize: "20px",
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
            <Button
              size="large"
              onClick={handleAddFriends}
              ghost
              style={{
                width: "100%",
                borderColor: "rgba(140, 140, 140, 0.35)",
                marginTop: "10px",
              }}
            >
              ADD
            </Button>
            {Array.isArray(contactList?.friends) &&
              contactList.friends.map((item) => {
                return (
                  <Card
                    style={{
                      marginTop: "1rem",
                      padding: "1%",
                    }}
                    onClick={() => toUserDetials(item._id as string)}
                    key={item._id}
                  >
                    <Avatar
                      src={`http://localhost:4000${item.avatar}`}
                      icon={<UserOutlined />}
                      size={50}
                      style={{ float: "left" }}
                    />
                    <div style={{ marginLeft: "20%" }}>
                      <div style={{ lineHeight: "2.2rem", fontSize: "1.5rem" }}>
                        {item.roomId}
                      </div>
                    </div>
                  </Card>
                );
              })}
          </div>
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Content>
  );
}
