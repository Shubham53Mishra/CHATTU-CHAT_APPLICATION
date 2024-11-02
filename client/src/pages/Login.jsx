// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Container, Paper, TextField, Typography, Button } from '@mui/material';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container component="main" maxWidth={false} sx={{ width: '100%' }}> {/* Full-width container */}
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: '100%' }}> {/* Full-width form */}
              <TextField required fullWidth label="Username" margin="normal" variant="outlined" />
              <TextField required fullWidth label="Password" type="password" margin="normal" variant="outlined" />
              <Button fullWidth sx={{ mt: 2 }} variant="contained" color="primary" type="submit">
                Login
              </Button>
              <Button fullWidth sx={{ mt: 2 }} color="secondary" onClick={() => setIsLogin(false)}>
                Don't have an account? Register
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Register</Typography>
            <form style={{ width: '100%' }}> {/* Full-width form */}
              <TextField required fullWidth label="Username" margin="normal" variant="outlined" />
              <TextField required fullWidth label="Email" type="email" margin="normal" variant="outlined" />
              <TextField required fullWidth label="Password" type="password" margin="normal" variant="outlined" />
              <Button fullWidth sx={{ mt: 2 }} variant="contained" color="primary" type="submit">
                Register
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
