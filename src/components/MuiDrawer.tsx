import React, { useState } from 'react';
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const MuiDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconButton size='large' edge='start' onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
        <Box p={2} width='250px' textAlign='center' role='presentation'>
          <Typography variant='h6' component='div'>
            Site Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
