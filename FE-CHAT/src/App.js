import "./App.css";
import React, { useState, useEffect } from "react";
import ListHistoryChat from "./components/listHistoryChat";
import Chat from "./components/chat";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";
function App() {
  const [message, setMessage] = useState("");
  const [lstMessage, setLstMessage] = useState([]);

  const onChange = (text) => {
    setMessage(text);
  };

  const sendMessageToServer = () => {
    const list = [...lstMessage];
    const object = {
      isMessageSend: true,
      content: message,
    };
    list.push(object);
    setLstMessage([...list]);
  };

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit("connection", (data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <ListHistoryChat />
      <Chat
        value={message}
        onChange={onChange}
        onClick={sendMessageToServer}
        listMessage={lstMessage}
      />
    </div>
  );
}

export default App;
