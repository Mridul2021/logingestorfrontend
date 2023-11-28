import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
      <Toolbar>
        <img
          src="https://assets-global.website-files.com/63ca2acc6352c221abe583d0/63caaeb042a0775de3e30f22_dyte-logo.svg"
          alt="Dyte Logo"
          style={{ height: '40px', marginRight: '10px' }}
        />
        <Typography variant="h6" color='black'>
        Log Ingestor
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
