import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import admin from '../services/admin.js'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import UserDash from '../components/user-dashboard.js'
import {Routes, Route} from 'react-router-dom';

const theme = createTheme();

export default function SignIn({token, setToken, id, setId, wid, setWid}) {
  const [successIn, setSuccessIn] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const obj = {
      admin_id: data.get('admin_id'),
      password: data.get('password'),
    };
    admin.login(obj)
    .then(response => {
      console.log(response);
      setToken(response.accessToken);
      setId(response.admin_id)
      setSuccessIn(true);
      setWid(response.warehouse_id);
      navigate('../admin-dashboard');
    })
    .catch(error => {
      console.log(error);
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 10,
            paddingBottom: 10,
            marginBottom: 5,
            bgcolor: '#EFF8FF',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="admin_id"
              label="Admin ID"
              name="admin_id"
              autoComplete="admin_id"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>

  );
}