import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import { Server } from "socket.io";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb", extended: true }));

// npm install body-parser
// import bodyParser from "body-parser";
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/", router);

var server = app.listen(process.env.SERVER_PORT || 8080, () => {
  var port = server.address().port;
  console.log(`Server is running on port ${port}`);
});

//connect socket

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connect to socket");
  socket.on("client-sent-data", (data) => {
    console.log(data);
    //sau khi lắng nghe dữ liệu, server phát lại dữ liệu này đến các client khác
    socket.emit("server-sent-data", "Aaaa");
  });
});
