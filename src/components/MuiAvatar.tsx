import React from 'react';
import { Stack, Avatar, AvatarGroup } from '@mui/material';
const MuiAvatar = () => {
  return (
    <Stack spacing={2}>
      <Stack direction='row' spacing={1}>
        <Avatar sx={{ backgroundColor: 'secondary.light' }}>BW</Avatar>
        <Avatar sx={{ backgroundColor: 'secondary.dark' }}>CK</Avatar>
      </Stack>
      <Stack direction='row' spacing={1}>
        <AvatarGroup>
          <Avatar sx={{ backgroundColor: 'primary.light' }}>BW</Avatar>
          <Avatar
            sx={{ backgroundColor: 'success.light' }}
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          />
        </AvatarGroup>
      </Stack>
      <Stack direction='row' spacing={1}>
        <Avatar
          variant='rounded'
          sx={{ backgroundColor: 'primary.light', width: 48, height: 48 }}
        >
          BW
        </Avatar>
        <Avatar
          variant='square'
          sx={{ backgroundColor: 'success.light', width: 48, height: 48 }}
        >
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
