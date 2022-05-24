import React, { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Container, Paper, Box, Button, TextField,
} from '@mui/material';
import SectionTitle from '../../components/sectionTitle';
import AuthContext from './auth-context';

const AdminLoginPage: React.FC = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <Container sx={{ my: 5 }}>

      <Paper
        component="form"
        elevation={3}
        sx={{
          display: 'flex',
          mx: 'auto',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          p: 2,
          width: 400,
          height: 500,
        }}
        onSubmit={handleSubmit}
      >
        <SectionTitle title="Admin Login" description="" />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 1 / 1,
          my: 2,
        }}
        >
          <TextField
            type="username"
            label="Username"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            type="password"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button variant="contained" color="primary" size="large" type="submit">Prisijungti</Button>
      </Paper>

    </Container>
  );
};

export default AdminLoginPage;
