import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import NavbarLink from './navbar-link';

const Navbar: React.FC = () => (
  <AppBar position="sticky" sx={{ bgcolor: 'grey.900' }}>
    <Container sx={{ px: { xs: 0, sm: 0 } }}>
      <Toolbar sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      >
        <Box>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/create">Create Yourself!</NavbarLink>
          <NavbarLink to="/gallery">Gallery</NavbarLink>
          <NavbarLink to="/contacts">Contacts</NavbarLink>
        </Box>
        <Box>
          <NavbarLink to="/login">Login</NavbarLink>
          <NavbarLink to="/register">Register</NavbarLink>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
