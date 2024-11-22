/* eslint-disable no-unused-vars */
import { AppBar, Box, Toolbar, Tooltip, Typography, IconButton } from '@mui/material';
import React from 'react';
import { orange } from '../../constants/color';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add'; // Corrected import

const Header = () => {
  const handleMobile = () => {
    console.log("mobile");
  };

  const openSearchDialog = () => {  
    console.log("openSearchDialog");
  };

  const openNewGroup = () => {  
    console.log("openNewGroup");
  };

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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
