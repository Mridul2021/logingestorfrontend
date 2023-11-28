import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Typography variant="h6" color='black'>
        Log Ingestor
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
