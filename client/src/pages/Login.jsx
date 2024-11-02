// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import VisuallyHiddenInput from '../components/styles/StyledCompoents.jsx';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: '100%' }}>
              <TextField required fullWidth label="Username" margin="normal" variant="outlined" />
              <TextField required fullWidth label="Password" type="password" margin="normal" variant="outlined" />
              <Button fullWidth sx={{ mt: 2 }} variant="contained" color="primary" type="submit">
                Login
              </Button>
              <Button fullWidth sx={{ mt: 2 }} color="secondary" onClick={() => setIsLogin(false)}>
                Don't have an account? Sign up
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign up</Typography>
            <form style={{ width: '100%' }}>
              <Stack position="relative" width="10rem" margin="auto">
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain"
                  }}
                />
                <IconButton
                  component="label" 
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    color: 'white',
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    "&:hover": {
                      bgcolor: "rgba(0, 0, 0, 0.7)", 
                    },
                    component: "label",
                  }}
                >
                  <CameraAltIcon />
                  <VisuallyHiddenInput type="file" /> 
                </IconButton>
              </Stack>

              <TextField required fullWidth label="Username" margin="normal" variant="outlined" />
              <TextField required fullWidth label="Bio" margin="normal" variant="outlined" />
              <TextField required fullWidth label="Email" type="email" margin="normal" variant="outlined" />
              <TextField required fullWidth label="Password" type="password" margin="normal" variant="outlined" />
              <Button fullWidth sx={{ mt: 2 }} variant="contained" color="primary" type="submit">
                Sign up
              </Button>
              <Button fullWidth sx={{ mt: 2 }} color="secondary" onClick={() => setIsLogin(true)}>
                Already have an account? Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
