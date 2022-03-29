import React from 'react';
import { Box, Grid } from '@mui/material';
const MuiLayout = () => {
  return (
    <div>
      <Grid container>
        <Grid bgcolor='primary.light' item>
          <Box>Item 1</Box>
        </Grid>
        <Grid bgcolor='primary.light' item>
          <Box>Item 2</Box>
        </Grid>
        <Grid bgcolor='primary.light' item>
          <Box>Item 3</Box>
        </Grid>
        <Grid bgcolor='primary.light' item>
          <Box>Item 4</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default MuiLayout;
