import React from "react";
import { Button, Card, Avatar } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useLayout } from "../Layout/index";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";

export default function UserDetails() {
  const { userid } = useParams();
  const { friendList_room, setFriendList_room, setSelectedKey } = useLayout();
  const navigate = useNavigate();
  const userList = useSelector((state: RootState) => state.userMessage.user);

  const toChat = (
    phoneNumber: number,
    id: number,
    _id: string,
    src: string
  ) => {
    const exists = friendList_room.some((item) => item._id === _id);
    if (!exists) {
      let newfriendList_room = friendList_room;
      newfriendList_room = [
        ...newfriendList_room,
        { id, phoneNumber, _id, src },
      ];
      setFriendList_room(newfriendList_room);
    }
    console.log(id, phoneNumber);
    navigate(`/layout/chat/${phoneNumber}`);
    setSelectedKey("chat");
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        textAlign: "center",
        paddingTop: "6%",
        backgroundColor: "transparent",
        border: "1px solid rgba(140, 140, 140, 0.35)",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 2%",
      }}
    >
      {Array.isArray(userList.friends) &&
        userList.friends.map((item) => {
          if (item._id === userid) {
            return (
              <Card
                key={item._id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  width: "70%",
                  height: "70%",
                  backgroundColor: "transparent",
                  textAlign: "center",
                  padding: "3%",
                  border: "0",
                  fontSize: "1.3rem",
                }}
              >
                <Avatar size={90} src={`http://localhost:4000${item.avatar}`} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10%",
                  }}
                >
                  <div>ChatID:</div>
                  <div>{item.roomId}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>Gender:</div>
                  <div>{item.gender}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>Birthday:</div>
                  <div>
                    {new Date(item.birthday as Date).toLocaleDateString()}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>PhoneNumber:</div>
                  <div>{item.phoneNumber}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>Occupation:</div>
                  <div>{item.occupation}</div>
                </div>
                <Button
                  ghost
                  size={"large"}
                  onClick={() =>
                    toChat(
                      item.phoneNumber as number,
                      Number(item.roomId),
                      item._id as string,
                      item.avatar as string
                    )
                  }
                  style={{
                    width: "100px",
                    marginBottom: "20px",
                    marginTop: "10%",
                  }}
                >
                  Chat
                </Button>
              </Card>
            );
          }
        })}
    </div>
  );
}
