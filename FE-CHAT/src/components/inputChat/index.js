import React from "react";
import "./styles.css";

const InputChat = () => {
  return (
    <div className="input-chat">
      <input placeholder="Enter message ..." />
      <button>Send</button>
    </div>
  );
};

export default InputChat;
