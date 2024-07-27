import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountCircle";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLayout } from "../Layout/index";
import style from "./bar.module.css";
import { RootState } from "../../Store/store";
import Avatar from "@mui/material/Avatar";

interface MyDropDownProps {
  items: ITEMS[];
  onclick?: (key: string) => void;
  className?: any;
}
interface ITEMS {
  label: string;
  key: string;
  icon: any;
}
const items1 = [
  {
    label: "Chat",
    key: "chat",
    icon: <ChatBubbleIcon style={{ color: "white", fontSize: "35px" }} />,
  },
  {
    label: "Contacts",
    key: "contacts",
    icon: (
      <AccountBoxIcon
        style={{ color: "white", fontSize: "35px" }}
        fontSize="large"
      />
    ),
  },
  {
    label: "Space",
    key: "space",
    icon: <StarBorderIcon style={{ color: "white", fontSize: "35px" }} />,
  },
];

const userId = sessionStorage.getItem("userId");

const MyDropDown = (props: MyDropDownProps) => {
  const { items, onclick, className } = props;
  const OnClick = (key: string) => {
    if (onclick) {
      return onclick(key);
    }
    return;
  };
  return (
    <div
      className={className}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        overflow: "auto",
      }}
    >
      {items &&
        items?.map((item) => (
          <div className={style.menuButton}>
            <button
              style={{
                height: "100%",
                backgroundColor: "transparent",
                border: "0px",
              }}
              onClick={() => OnClick(item.key)}
            >
              {item.icon}
            </button>
          </div>
        ))}
    </div>
  );
};

export default function Bar() {
  const { setSelectedKey, selectedKey } = useLayout();
  const { avatar } = useSelector((state: RootState) => state.userMessage.user);
  const navigator = useNavigate();
  const onClick = (key: string) => {
    navigator(`/layout/${key}`);
    setSelectedKey(key);
  };
  return (
    <div
      style={{
        width: "60px",
        background: "Rgb(67,151,247)",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "10px",
        overflow: "auto",
      }}
    >
      <div
        style={{
          height: "40px",
          width: "40px",
          textAlign: "center",
          fontSize: "20px",
          lineHeight: "40px",
          marginTop: "10px",
          color: "white",
        }}
      >
        Chat
      </div>
      <div>
        <Avatar
          src={`http://localhost:4000${avatar}`}
          style={{ margin: "10px 0 0 0" }}
        />
      </div>
      <MyDropDown items={items1} onclick={onClick} />
    </div>
  );
}
