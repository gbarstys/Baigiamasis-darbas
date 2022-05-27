import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
} from '@mui/material';
import AdminNavbarLink from './admin-navbar-link';
import AuthContext from '../../features/auth/auth-context';
import NavbarAuthMenu from './navbar-auth-menu';
import NavbarVisitorMenu from './navbar-visitor-menu';

const AdminNavbar: React.FC = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <AppBar position="sticky" sx={{ bgcolor: 'grey.900' }}>
      <Container sx={{ px: { xs: 0, sm: 0 } }}>
        <Toolbar sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        >
          <Box>
            <AdminNavbarLink to="/admin/dashboard">Dashboard</AdminNavbarLink>
            <AdminNavbarLink to="admin/editorders">Orders</AdminNavbarLink>
            <AdminNavbarLink to="admin/editproducts">Products Edit</AdminNavbarLink>
            <AdminNavbarLink to="admin/editgallery">Gallery Edit</AdminNavbarLink>
          </Box>
          <Box>
            {loggedIn ? <NavbarAuthMenu /> : <NavbarVisitorMenu />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AdminNavbar;
