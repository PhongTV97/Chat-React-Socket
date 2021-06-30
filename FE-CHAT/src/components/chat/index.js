import React from "react";
import InforUser from "../inforUser";
import MessageReceive from "../messageReceive";
import MessageSend from "../messageSend";
import InputChat from "../inputChat";
import "./styles.css";

const Chat = () => {
  return (
    <div className="chat-container">
      <InforUser />
      <div className="chat">
        <div className="content">
          <MessageReceive />
          <MessageSend />
        </div>
      </div>
      <InputChat />
    </div>
  );
};

export default Chat;
