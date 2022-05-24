import React from 'react';
import {
  Typography, Container, Box, List, Button,
} from '@mui/material';

const AdminDashboard: React.FC = () => (
  <Container sx={{ display: 'flex', flexDirection: 'column' }}>
    <Box>
      <Typography>
        Welcome to Admin dashboard! In the navbar menu you can choose youre actions
      </Typography>
      <List sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button color="warning" href="dashboard/orders">You can view your orders</Button>
        <Button color="warning" href="dashboard/products">You can edit, add and remove products</Button>
        <Button color="warning" href="dashboard/gallery">You can edit, add and remove gallery cards</Button>
      </List>
    </Box>
  </Container>
);

export default AdminDashboard;
