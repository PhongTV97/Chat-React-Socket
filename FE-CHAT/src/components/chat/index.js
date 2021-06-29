import React from "react";
import InforUser from "../inforUser";
import MessageReceive from "../messageReceive";
import MessageSend from "../messageSend";
import InputChat from "../inputChat";

import "./styles.css";

const Chat = () => {
  return (
    <div className="chat">
      <InforUser />
      <div className="content">
        <MessageReceive />
        <MessageSend />
        <InputChat />
      </div>
    </div>
  );
};

export default Chat;
