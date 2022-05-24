import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
} from '@mui/material';
import AdminNavbarLink from './admin-navbar-link';

const AdminNavbar: React.FC = () => (
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
          <AdminNavbarLink to="/admin/dashboard/orders">Orders</AdminNavbarLink>
          <AdminNavbarLink to="/admin/dashboard/products">Products Edit</AdminNavbarLink>
          <AdminNavbarLink to="/admin/dashboard/gallery">Gallery Edit</AdminNavbarLink>

        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default AdminNavbar;
