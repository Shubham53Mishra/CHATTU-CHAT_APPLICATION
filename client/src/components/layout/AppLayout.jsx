/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid } from '@mui/material';
import Header from './Header';
import Title from '../shared/Title';
import Chatlist from '../specific/Chatlist';
import { sampleChats } from '../../constants/sampleData';

const AppLayout = (WrappedComponent) => {
  return (props) => {
    const chatId = '1'; // Mocked current chat ID for testing

    return (
      <>
        <Title />
        <Header />
        <Grid container height={'calc(100vh - 4rem)'}>
          {/* Left Sidebar: Chat List */}
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: 'none', sm: 'block' } }}
            height={'100%'}
          >
            <Chatlist
              chats={sampleChats}
              chatId={chatId} // Correct variable passed as chatId
              newMessagesAlert={[{ chatId, count: 4 }]} // Example new messages alert
              onlineUsers={['1', '2']} // Example online users
            />
          </Grid>

          {/* Main Content Area */}
          <Grid item xs={12} sm={8} md={5} lg={6} height={'100%'}>
            <WrappedComponent {...props} />
          </Grid>

          {/* Right Sidebar */}
          <Grid
            item
            md={4}
            lg={3}
            height={'100%'}
            sx={{ display: { xs: 'none', md: 'block' }, padding: '2rem', bgcolor: 'rgba(0,0,0,0.85)' }}
          >
            {/* Third Column Content */}
            third
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
