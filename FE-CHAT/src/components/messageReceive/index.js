import React from "react";
import "./styles.css";

const MessageReceive = () => {
  return (
    <>
      <div className="message-receive">
        <div className="avatar">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            width="100%"
            alt=""
          />
        </div>
        <div className="content-message">
          <p>Hello, My name is Robot! </p>
        </div>
      </div>
      <div className="time">8:55 AM, Today</div>
    </>
  );
};

export default MessageReceive;
