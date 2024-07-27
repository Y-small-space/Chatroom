import React, { useState, useEffect, createContext, useContext } from "react";
import { fetchChatHistory } from "../../Store/allhistorySlice";
import { fetchUsermessage } from "../../Store/userMessageSlice";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import Bar from "../Bar";
import socket from "../../socket/index";
import { useSelector } from "react-redux";
import "./index.css";
import { RootState } from "../../Store/store";
import { useAppDispatch } from "../../Store/hooks";
import { RoomId } from "../../types";

const { Footer } = Layout;
interface LayoutContextType {
  friendList_room: any[];
  setFriendList_room: React.Dispatch<React.SetStateAction<any[]>>;
  selectedKey: string;
  setSelectedKey: React.Dispatch<React.SetStateAction<string>>;
  roomId: RoomId[];
  setRoomId: React.Dispatch<React.SetStateAction<RoomId[]>>;
}

const LayoutContext = createContext<LayoutContextType | null>(null);

const Layouts: React.FC = () => {
  const contactList = useSelector((state: RootState) => state.userMessage.user);
  const [friendList_room, setFriendList_room] = useState<any[]>([]);
  const [selectedKey, setSelectedKey] = useState<string>("login");
  const [roomId, setRoomId] = useState<RoomId[]>([]);
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const userMessage = localStorage.getItem("userMessage");
  const { friends } = JSON.parse(userMessage || "{}") as { friends: any[] };
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const jwt = sessionStorage.getItem("token");
    if (!jwt) {
      navigator("/login");
    } else {
      dispatch(fetchChatHistory());
      dispatch(fetchUsermessage());
    }

    const connectToChatRooms = async (
      friends: any[],
      userId: string | null
    ) => {
      friends?.forEach(async (item) => {
        const roomId = sessionStorage.getItem(String(item.phoneNumber));
        if (roomId) {
          socket.emit("join", roomId);
        } else {
          const response = await fetch("http://localhost:4000/api/roomId", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId1: Number(userId),
              userId2: String(item.phoneNumber),
            }),
          });
          if (response.status === 200) {
            const data = await response.json();
            const { roomId } = data;
            sessionStorage.setItem(String(item.phoneNumber), String(roomId));
            socket.emit("join", String(roomId));
          }
        }
      });
    };

    connectToChatRooms(friends || [], userId);

    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    contactList.friends?.forEach((item) => {
      const roomId = sessionStorage.getItem(String(item?.phoneNumber));
      socket.emit("join", roomId);
    });
  });

  return (
    <LayoutContext.Provider
      value={{
        friendList_room,
        setFriendList_room,
        selectedKey,
        setSelectedKey,
        roomId,
        setRoomId,
      }}
    >
      <div style={{ width: "100%", display: "flex" }}>
        <Bar />
        <Outlet />
        {/* <Footer
          style={{
            textAlign: "center",
            backgroundColor: "transparent",
            color: "white",
            height: "9%",
          }}
        >
          Chat Room ©2023 Created by JY
        </Footer> */}
      </div>
    </LayoutContext.Provider>
  );
};

export default Layouts;

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
}
