/* eslint-disable react/prop-types */
import React from 'react';
import { Avatar, Stack, Typography, Box } from '@mui/material';
import { Link } from '../styles/StyledCompoents.jsx';

const Chatitem = ({
  name,
  _id,
  isOnline,
  newMessagesAlert,
  sameSender,
  groupChat,
  handleDeleteChatOpen
}) => {
  return (
    <Link sx={{
      padding: "0",
    }}
      to={`/chat/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)}
    >
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: sameSender ? 'black' : 'unset',
          color: sameSender ? 'white' : 'unset',
          position: 'relative',
        }}
      >
        <Avatar alt={name} />
        <Stack>
          <Typography>{name}</Typography>
          {newMessagesAlert?.count && (
            <Typography>{newMessagesAlert.count} New Messages</Typography>
          )}

        </Stack>
        {isOnline && (
          <Box
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default React.memo(Chatitem);
