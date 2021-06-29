import React from "react";
import "./styles.css";

const MessageSend = () => {
  return (
    <div className="message-send-container">
      <div className="message-send">
        <div className="content-message">
          <p>Hello, My name is Robot! </p>
        </div>
        <div className="avatar">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            width="100%"
            alt=""
          />
        </div>
      </div>
      <div className="time">8:55 AM, Today</div>
    </div>
  );
};

export default MessageSend;
