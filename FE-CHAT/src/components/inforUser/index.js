import React from "react";
import "./styles.css";

const InforUser = () => {
  return (
    <div className="infor-user">
      <div className="avatar">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          width="100%"
          alt=""
        />
        <div className="online" />
      </div>
      <div className="infor">
        <span className="name">Van Phong Tran</span>
        <span className="number-chat">888 Messages</span>
      </div>
    </div>
  );
};

export default InforUser;
