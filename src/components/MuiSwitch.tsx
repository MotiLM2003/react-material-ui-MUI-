import React, { useState } from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';
const MuiSwitch = () => {
  const [value, setValue] = useState<boolean>(true);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setValue(e.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label='Dark mode'
        control={<Switch onChange={onChange} checked={value} />}
      />
    </Box>
  );
};

export default MuiSwitch;
