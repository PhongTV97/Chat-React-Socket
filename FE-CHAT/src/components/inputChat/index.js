import React from "react";
import "./styles.css";

const InputChat = ({ value, onClick, onChange }) => {
  return (
    <div className="input-chat">
      <input
        placeholder="Enter message ..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button style={{ cursor: "pointer" }} onClick={onClick}>
        Send
      </button>
    </div>
  );
};

export default InputChat;
