/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Stack } from '@mui/material';
import React from 'react';
import Chatitem from '../shared/Chatitem';

const Chatlist = ({
  w = "100%",  
  chats = [], 
  chatId, // Current chat ID
  onlineUsers = [], // List of online users
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,  
    },
  ],
  handleDeleteChat, // Function to handle chat deletion
}) => {
  return (
    <Stack width={w} direction="column">
      {chats.map((data, index) => {
        const { Avatar, _id, name, groupChat, members } = data;

        // Find the new message alert for this chat
        const newMessageAlert = newMessagesAlert.find((alert) => alert.chatId === _id);

        // Determine if any members are online
        const isOnline = members?.some((member) => onlineUsers.includes(member._id));

        return (
          <Chatitem
            key={_id || index} // Fallback to index if `_id` is missing
            index={index}
            newMessagesAlert={newMessageAlert} // Consistent prop name
            isOnline={isOnline}
            Avatar={Avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChatOpen={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default Chatlist;
