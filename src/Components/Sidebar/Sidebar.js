import React from "react";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { IconButton } from "@material-ui/core";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import s from "./Sidebar.module.scss";
import { Avatar } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from "../SidebarChat/SidebarChat";

const Sidebar = () => {
  return (
    <div className={s.sidebarContainer}>
      <div className={s.header}>
        <div className={s.avatar}>
          <Avatar src="" />
        </div>
        <div className={s.menuActions}>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className={s.searchbox}>
        <div className={s.search}>
          <div className={s.icon}>
            <SearchOutlined />
          </div>
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className={s.chats}>
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
