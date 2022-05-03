import {
  Container,
  Typography,
  Box,
  Button,

} from '@mui/material';
import React from 'react';
import logo from '../assets/leashlogo.png';
import Section from '../components/section';

const HomePage: React.FC = () => (
  <Container sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 15,
    margin: 'auto',
    width: 1 / 1,
  }}
  >
    <Box
      component="img"
      src={logo}
      sx={{
        width: '600px',
        boxShadow: 3,
        borderRadius: 3,
        height: 600,
        my: 5,
      }}
    />

    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 2,
      border: '1px solid grey',
      borderRadius: 3,
      background: '#7f797e',
      boxShadow: 3,
      padding: 5,
      my: 5,
      height: 600,
    }}
    >
      <Typography gutterBottom variant="h4" component="h1" color="white" fontFamily="Quicksand">
        Minimalist Design HandMade Leashes
      </Typography>
      <Typography variant="body2" color="white" fontFamily="Quicksand" fontSize="20px">
        This brand creates handmade leashes for dog shows and everyday activities. You can choose from already made products or choose components by yourself, (color, length, size, etc..)
      </Typography>
      <Section>
        <Button variant="contained" color="primary">Susikurk pats!</Button>
        <Button variant="contained" color="primary">Rinkis iš jau pagamintų</Button>
      </Section>
    </Box>
  </Container>
);

export default HomePage;
