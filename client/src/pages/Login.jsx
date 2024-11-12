import React, { useState } from 'react';
import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp';
import { usernameValidator } from '../utils/validators.js';

// VisuallyHiddenInput Component for handling hidden file input styling
const VisuallyHiddenInput = ({ onChange }) => (
  <input
    type="file"
    onChange={onChange}
    style={{
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      border: 0,
    }}
  />
);

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

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
          <>
            <Typography variant="h5">Sign up</Typography>
            <form style={{ width: '100%' }}>
              <Stack position="relative" width="10rem" margin="auto">
                <Avatar
                  src={avatar.preview}
                  sx={{
                    width: '10rem',
                    height: '10rem',
                    objectFit: 'contain',
                  }}
                />
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
                  <VisuallyHiddenInput onChange={avatar.changeHandler} />
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
