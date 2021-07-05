import "./App.css";
import React, { useState, useEffect } from "react";
import ListHistoryChat from "./components/listHistoryChat";
import Chat from "./components/chat";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";
function App() {
  const [message, setMessage] = useState("");
  const [lstMessage, setLstMessage] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("connection", (res) => {
      console.log(res);
    });

    socket.on("server-sent-data", (res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  const onChange = (text) => {
    setMessage(text);
  };

  const sendMessageToServer = () => {
    const socket = socketIOClient(ENDPOINT);
    const list = [...lstMessage];
    const object = {
      isMessageSend: true,
      content: message,
    };
    list.push(object);
    setLstMessage([...list]);
    socket.emit("client-sent-data", object);
  };

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
