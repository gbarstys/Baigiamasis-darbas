import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import NavbarLink from './navbar-link';

const Navbar: React.FC = () => (
  <AppBar position="static" sx={{ bgcolor: 'grey.900' }}>
    <Container sx={{ px: { xs: 0, sm: 0 } }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <PetsIcon />
        </Typography>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/create">Create Yourself!</NavbarLink>
        <NavbarLink to="/gallery">Gallery</NavbarLink>
        <NavbarLink to="/contacts">Contacts</NavbarLink>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
