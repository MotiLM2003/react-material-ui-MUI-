import React from 'react';
import { Stack, TextField } from '@mui/material';
import { TextFormatRounded } from '@mui/icons-material';
const MuiTextField = () => {
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
          <TextField label='name' variant='outlined' />
          <TextField label='name' variant='filled' />
          <TextField label='name' variant='standard' />
        </Stack>
        <Stack direction='row' spacing={2}>
          <TextField label='Small' size='small' />
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiTextField;
