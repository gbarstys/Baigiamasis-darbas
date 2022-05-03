import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import Grid from '@mui/material/Grid';

const GalleryPage: React.FC = () => (
  <Container sx={{ my: 5 }}>
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1517598499378-be07cbf2e1d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              alt="dog1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pavadėlis1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Šioje vietoje bus rankų darbo pavadėlio aprašymas
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1517598499378-be07cbf2e1d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              alt="dog2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pavadėlis2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Šioje vietoje bus rankų darbo pavadėlio aprašymas
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1517598499378-be07cbf2e1d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              alt="dog3"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pavadėlis3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Šioje vietoje bus rankų darbo pavadėlio aprašymas
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={8}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1517598499378-be07cbf2e1d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              alt="dog4"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pavadėlis4
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Šioje vietoje bus rankų darbo pavadėlio aprašymas
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default GalleryPage;
