/* eslint-disable no-unused-vars */
import { AppBar, Box, Toolbar, Tooltip, Typography, IconButton } from '@mui/material';
import React from 'react';
import { orange } from '../../constants/color';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';  
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';
import { Logout } from '@mui/icons-material';

const Header = () => {
  const navigate = useNavigate();
  const handleMobile = () => {
    console.log("mobile");
  };

  const openSearchDialog = () => {  
    console.log("openSearchDialog");
  };

  const openNewGroup = () => {  
    console.log("openNewGroup");
  };
  
 
  const navigateToGroup = () => navigate(" /Groups");
     const LogoutHandler = () =>  {
       console.log("LogoutHandler");
     }

  return (
    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
      <AppBar
        position="static"
        sx={{
          bgcolor: orange,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}
          >
            chattu
          </Typography>
          <Box
            sx={{
              display: { xs: 'block', sm: 'none' },
            }}
          >
            <IconButton color="inherit" onClick={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
            }}
          />
          <Box>
            <IconBtn title="Search" icons={<SearchIcon />} onClick={openSearchDialog} />
            <IconBtn title="Open new group" icons={<AddIcon />} onClick={openNewGroup} />
       
            <IconBtn title="Manage Groups" icons={<GroupIcon />} onClick={navigateToGroup} />
            <IconBtn title="Logout" icons={<Logout />} onClick={LogoutHandler} />
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const IconBtn = ({ title, icons, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icons}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
