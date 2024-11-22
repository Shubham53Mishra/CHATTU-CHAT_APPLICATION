/* eslint-disable no-unused-vars */
import { AppBar, Box, Toolbar, Tooltip, Typography, IconButton } from '@mui/material';
import React from 'react';
import { orange } from '../../constants/color';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';  
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';

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
            <Tooltip title="Search">
              <IconButton color="inherit" size="large" onClick={openSearchDialog}>
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open new group">
              <IconButton color="inherit" size="large" onClick={openNewGroup}>
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Manage Groups" >
              <IconButton color="inherit" size="large"onClick={navigateToGroup}>
                <GroupIcon />
              </IconButton>
                </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const IconBtn ={{title,icons,onClick}} => {
  return (
    <Tooltip title={title}>
    <IconButton color="inherit" size="large" onClick={onClick}>
      {icons}
    </IconButton>
  </Tooltip>

  )
}

export default Header;
