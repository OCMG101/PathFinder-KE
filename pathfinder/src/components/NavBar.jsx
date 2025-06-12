import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PathFinder-KE
        </Typography>
        <Box>
          {navLinks.map((link) => (
            <Button
              key={link.to}
              color="inherit"
              component={RouterLink}
              to={link.to}
              sx={{
                borderBottom: location.pathname === link.to ? '2px solid #fff' : 'none',
                borderRadius: 0,
                fontWeight: location.pathname === link.to ? 'bold' : 'normal'
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;