import React, { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';
const MuiSelect = () => {
  const [country, setCountry] = useState<string>();
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setCountry(e.target.value as string);
  };
  return (
    <Box width='250px'>
      <TextField
        label='Select country'
        select
        value={country}
        onChange={onchange}
        fullWidth
      >
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='IL'>ISRAEL</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
