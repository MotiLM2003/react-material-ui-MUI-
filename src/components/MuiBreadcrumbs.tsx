import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs separator='' maxItems={3} itemsBeforeCollapse={2}>
        <Link underline='hover' href='#'>
          Home
        </Link>
        <Link underline='hover' href='#'>
          Catalog
        </Link>
        <Link underline='hover' href='#'>
          Accessories
        </Link>
        <Typography color='text.primary'>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
