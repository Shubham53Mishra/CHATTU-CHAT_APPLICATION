 import { Stack } from '@mui/material';
import React from 'react'
 const Chatlist = ({
    w = "100%", // Default width
    chats = [], // List of chats
    chatId, // Current chat ID
    onlineUsers = [], // List of online users
    newMessagesAlert = [
      {
        chatId: 1,
        count: 0, // Default alert for messages
      },
    ],
    handleDeleteChat, // Function to handle chat deletion
  }) => {
    return (
      <Stack width={w} direction="column">
       {
         chats?.map (data=>{
           return <div>{data}</div>
         })
      }
      </Stack>
    );
  };
 
 export default Chatlist