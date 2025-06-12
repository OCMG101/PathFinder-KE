import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Home = () => (
  <Container maxWidth="md">
    <Box sx={{ padding: 6, textAlign: 'center' }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Welcome to PathFinder-KE
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Visualize and compare popular pathfinding algorithms like Dijkstra's and A* in real-time.
        Explore, learn, and interact with algorithms on a dynamic grid.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" size="large" href="/about">
          Learn More
        </Button>
        <Button variant="outlined" color="primary" size="large" href="/contact">
          Contact Us
        </Button>
      </Stack>
    </Box>
  </Container>
);

export default Home;