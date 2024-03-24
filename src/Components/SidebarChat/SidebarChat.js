import React from "react";

import s from "./SidebarChat.module.scss";
import { Avatar } from "@mui/material";

const SidebarChat = () => {
  return (
    <div className={s.sidebarChatContainer}>
      <div className={s.avatar}>
        <Avatar />
      </div>
      <div className={s.infoContainer}>
        <h2 className={s.title}>Room Name</h2>
        <p className={s.subTitle}> last message </p>
      </div>
    </div>
  );
};

export default SidebarChat;
