import React from "react";
import style from "./contact.module.css";
export default function NullUser() {
  return (
    <div className={style.nulluser}>
      <div
        style={{
          fontSize: "10rem",
          color: "rgb(100,100,100)",
          margin: "0 2%",
        }}
      >
        CHAT
      </div>
    </div>
  );
}
