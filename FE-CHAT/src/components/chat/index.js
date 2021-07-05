import React, { useRef } from "react";
import InforUser from "../inforUser";
import MessageReceive from "../messageReceive";
import MessageSend from "../messageSend";
import InputChat from "../inputChat";
import "./styles.css";

const Chat = ({ onClick, onChange, value, listMessage = [] }) => {
  const messagesEnd = useRef(null);
  const renderListMessage = () => {
    const list = [];
    listMessage.forEach((item, index) => {
      if (item.isMessageSend) {
        list.push(<MessageSend key={index} content={item.content} />);
      } else {
        list.push(<MessageReceive key={index} content={item.content} />);
      }
    });

    return list;
  };
  return (
    <div className="chat-container">
      <InforUser />
      <div className="chat" ref={messagesEnd}>
        <div className="content">{renderListMessage()}</div>
      </div>
      <InputChat onClick={onClick} onChange={onChange} value={value} />
    </div>
  );
};

export default Chat;
