import React, { useState } from 'react';
import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import VisuallyHiddenInput from '../components/styles/StyledCompoents.jsx';
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp';
import { usernameValidator } from '../utils/validators.js';

const Login = () => {
  // State to toggle between login and signup
  const [isLogin, setIsLogin] = useState(true);

  // Form validation hooks
  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useStrongPassword("");
  const avatar = useFileHandler("single");

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
          // Login Form
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: '100%' }}>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                fullWidth
                sx={{ mt: 2 }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
              <Button
                fullWidth
                sx={{ mt: 2 }}
                color="secondary"
                onClick={() => setIsLogin(false)}
              >
                Don't have an account? Sign up
              </Button>
            </form>
          </>
        ) : (
          // Signup Form
          <>
            <Typography variant="h5">Sign up</Typography>
            <form style={{ width: '100%' }}>
              {/* Avatar with file upload */}
              <Stack position="relative" width="10rem" margin="auto">
                <Avatar
                  src={avatar.preview}  // Avatar preview from file upload
                  sx={{
                    width: '10rem',
                    height: '10rem',
                    objectFit: 'contain',
                  }}
                />
                 {avatar.error && (
                <Typography  m={1rem "auto"} width={"fit-content"} display={"block"} variant="caption" color="error">
                  {avatar.error}
                </Typography>
              )}

                <IconButton
                  component="label"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    color: 'white',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    "&:hover": {
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                    },
                  }}
                >
                  <CameraAltIcon />
                  <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography variant="caption" color="error">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography variant="caption" color="error">
                  {password.error}
                </Typography>
              )}
              <Button
                fullWidth
                sx={{ mt: 2 }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign up
              </Button>
              <Button
                fullWidth
                sx={{ mt: 2 }}
                color="secondary"
                onClick={() => setIsLogin(true)}
              >
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
