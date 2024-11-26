/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { lazy, Suspense, useState } from 'react';
import { AppBar, Box, Toolbar, Tooltip, Typography, IconButton, Backdrop } from '@mui/material';
import { orange } from '../../constants/color';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';
import { BackHand, Logout, Notifications } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Lazy-loaded components
const SearchDialog = lazy(() => import('../specific/Search'));
const NewGroupDialog = lazy(() => import('../specific/NewGroup'));
const NotificationsDialog = lazy(() => import('../specific/Notifications'));

// Reusable Icon Button Component
const IconBtn = ({ title, icons, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icons}
      </IconButton>
    </Tooltip>
  );
};

const Header = () => {
  const navigate = useNavigate();

  // State hooks for UI logic
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotifications, setIsNotifications] = useState(false);

  // Handlers
  const handleMobile = () => setIsMobile((prev) => !prev);

  const toggleSearchDialog = () => setIsSearch((prev) => !prev);

  const toggleNewGroupDialog = () => setIsNewGroup((prev) => !prev);

  const toggleNotificationsDialog = () => setIsNotifications((prev) => !prev);

  const navigateToGroup = () => navigate('/Groups');

  const LogoutHandler = () => {
    console.log('LogoutHandler');
    // Add your logout functionality here
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height="4rem">
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            {/* App Title */}
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
            <Box sx={{ flexGrow: 1 }} />

            {/* Action Buttons */}
            <Box>
              <IconBtn title="Search" icons={<SearchIcon />} onClick={toggleSearchDialog} />
              <IconBtn title="Open New Group" icons={<AddIcon />} onClick={toggleNewGroupDialog} />
              <IconBtn title="Manage Groups" icons={<GroupIcon />} onClick={navigateToGroup} />
              <IconBtn title="Notifications" icons={<Notifications />} onClick={toggleNotificationsDialog} />
              <IconBtn title="Logout" icons={<Logout />} onClick={LogoutHandler} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      
      {
        isSearch && (
          <Suspense fallback={ <Backdrop open/>}>
            <SearchDialog />
          </Suspense>
        )
      }
      {
        isNewGroup && (
          <Suspense fallback={ <Backdrop open/>}>
            <NewGroupDialog />
          </Suspense>
        )
      }
      {
        isNotifications && (
          <Suspense fallback={ <Backdrop open/>}>
            <NotificationsDialog />
          </Suspense>
        )
      }
    </>
  );
};

export default Header;
