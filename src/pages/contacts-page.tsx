import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const ContactsPage: React.FC = () => (
  <Container sx={{
    my: 5,
    p: 2,
    border: '1px solid grey',
    background: '#fff',
  }}
  >
    <Typography component="h1" variant="h3">Kontaktai</Typography>
    <Box sx={{ mt: 4 }}>
      <Typography variant="body1" color="theme.palette.green">Vardas Pavardė</Typography>
      <Typography variant="body1">email@email.com</Typography>
      <Typography variant="body1">+37060000000</Typography>
    </Box>
  </Container>
);

export default ContactsPage;
