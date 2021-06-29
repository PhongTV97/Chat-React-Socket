import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import { Server } from "socket.io";

dotenv.config();

const app = express();

app.use("/", router);

var server = app.listen(process.env.SERVER_PORT || 8080, () => {
  var port = server.address().port;
  console.log(`Server is running on port ${port}`);
});

//connect socket

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connect to socket: ", socket);
});
