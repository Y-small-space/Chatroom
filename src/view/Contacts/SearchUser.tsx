import React, { useState, KeyboardEvent } from "react";
import { Button, Card, Input, message, Avatar } from "antd";
import axios from "axios";
import style from "./contact.module.css";
import socket from "../../socket";
import { useNavigate } from "react-router-dom";
import { fetchUsermessage } from "../../Store/userMessageSlice";
import { useAppDispatch } from "../../Store/hooks";
import { User } from "../../types";
const userId = sessionStorage.getItem("userId");

export default function SearchUserPage() {
  const [searchResult, setSearchResult] = useState<User|null>();
  const [searchUser, setSearchUser] = useState("");
  const [isClickSearch, setIsClickSearch] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      SearchUser();
      setIsClickSearch(!isClickSearch);
      setSearchUser("");
    }
  };
  // 添加好友
  const AddFriends = async (friendId: number) => {
    try {
      const jwt = sessionStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:4000/api/addFriends",
        {
          userIdToAdd: friendId,
          currentUserId: userId,
        },
        {
          headers: {
            Authorization: `${jwt}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(friendId, userId);
        message.success("Successfully Added");
        const response = await fetch("http://localhost:4000/api/roomId", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId1: Number(userId), userId2: friendId }),
        });
        if (!response.ok) {
          throw new Error("获取房间ID失败");
        }
        const data1 = await response.json();
        if (response.status === 200) {
          try {
            socket.emit("join", String(data1.roomId));
            sessionStorage.setItem(String(friendId), String(data1.roomId));
            console.log("====================================");
            console.log(data1.roomId);
            console.log("====================================");
            dispatch(fetchUsermessage());
            setSearchResult(null);
          } catch (error: any) {
            console.error("获取房间ID时出错：", error);
            if (error.response && error.response.status === 403) {
              sessionStorage.clear();
              localStorage.clear();
              navigate("/login");
              console.log("JWT 已过期");
            }
            throw error;
          }
        }
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        message.error(error.response.data.error || "Error adding friend");
      } else {
        message.error("Error adding friend");
      }
    }
  };

  // 搜索好友
  const SearchUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/search/${searchUser}`
      );
      const date = new Date(response.data.birthday);
      const formattedDate = date.toLocaleDateString();
      setSearchResult({ ...response.data, birthday: formattedDate });
    } catch (error) {
      message.error("Not found!");
      console.error("搜索失败：", error);
    }
  };

  return (
    <Card className={style.searchuser}>
      <Input
        size="large"
        style={{ width: "500px" }}
        onChange={(e) => setSearchUser(e.target.value)}
        onKeyDown={handleEnterKey}
      ></Input>
      {searchResult && (
        <Card
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            width: "500px",
            marginTop: "20px",
            height: "280px",
            backgroundColor: "",
            textAlign: "center",
            padding: "5%",
          }}
        >
          <Avatar
            size={60}
            src={`http://localhost:4000${searchResult.avatar}`}
          />
          <div>cid:{searchResult.roomId}</div>
          <div>gender:{searchResult.gender}</div>
          <div>birthday:{searchResult.birthday}</div>
          <div>phoneNumber:{searchResult.phoneNumber}</div>
          <div>occupation:{searchResult.occupation}</div>
          <Button
            onClick={() => AddFriends(searchResult.phoneNumber)}
            style={{
              marginTop: "20px",
              border: "0",
              backgroundColor: "rgb(100,100,100,0.5)",
            }}
          >
            ADD
          </Button>
        </Card>
      )}
    </Card>
  );
}
