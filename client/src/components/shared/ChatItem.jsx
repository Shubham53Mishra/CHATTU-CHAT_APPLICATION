// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Stack } from '@mui/material';

const Chatitem = ({
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
      {chats.length > 0 ? (
        chats.map((chat, index) => (
          <div key={chat.id || index}>
            <p>{chat.name || `Chat ${index + 1}`}</p>
            {newMessagesAlert.find((alert) => alert.chatId === chat.id) && (
              <span>
                {newMessagesAlert.find((alert) => alert.chatId === chat.id).count} new
                messages
              </span>
            )}
            <button onClick={() => handleDeleteChat(chat.id)}>Delete Chat</button>
          </div>
        ))
      ) : (
        <p>No chats available</p>
      )}
    </Stack>
  );
};

export default Chatitem;
