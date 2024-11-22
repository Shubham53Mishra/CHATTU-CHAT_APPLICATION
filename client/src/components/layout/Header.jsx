/* eslint-disable no-unused-vars */
import React, { Suspense, useState } from 'react';
import { AppBar, Box, Toolbar, Tooltip, Typography, IconButton } from '@mui/material';
import { orange } from '../../constants/color';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';
import { Logout, Notifications } from '@mui/icons-material';
import SearchDialog from '../specific/Search'; // Ensure this component exists and is correctly implemented.
import { Sear } from '@mui/icons-material/Menu';


const SearchDialog = lazy(() => import('../specific/Search'));
const NewGroupDialog = lazy(() => import('../specific/NewGroup'));
const NotificationsDialog = lazy(() => import('../specific/Notifications'));
const Header = () => {import { lazy } from 'react';

  const navigate = useNavigate();

  // State hooks for handling UI logic
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotifications, setIsNotifications] = useState(false);

  // Handlers
  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const toggleSearchDialog = () => {
    setIsSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const openNotifications = () => {
    setIsNotifications((prev) => !prev);
  };

  const navigateToGroup = () => navigate("/Groups");

  const LogoutHandler = () => {
    console.log("LogoutHandler");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            {/* Logo or title */}
            <Typography
              variant="h6"
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}
            >
              chattu
            </Typography>

            {/* Mobile Menu Button */}
            <Box
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Spacer for alignment */}
            <Box
              sx={{
                flexGrow: 1,
              }}
            />

            {/* Action Buttons */}
            <Box>
              <IconBtn title="Search" icons={<SearchIcon />} onClick={toggleSearchDialog} />
              <IconBtn title="Open New Group" icons={<AddIcon />} onClick={openNewGroup} />
              <IconBtn title="Manage Groups" icons={<GroupIcon />} onClick={navigateToGroup} />
              <IconBtn title="Notifications" icons={<Notifications />} onClick={openNotifications} />
              <IconBtn title="Logout" icons={<Logout />} onClick={LogoutHandler} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Render Search Dialog if isSearch is true */}
      {isSearch && <Suspense fallback={<div>Loading...</div>}><SearchDialog   /></Suspense>}

      {/* Render NewGroup Dialog if isNewGroup is true */}
      {isNewGroup && <Suspense fallback={<div>Loading...</div>}><NewGroupDialog /></Suspense>}

      {/* Render Notifications Dialog if isNotifications is true */}
      {isNotifications && <Suspense fallback={<div>Loading...</div>}><NotificationsDialog /></Suspense>}
    </>
  );
};

// Icon Button Component
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
