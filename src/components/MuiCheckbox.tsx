import React, { useState } from 'react';
import { Box, FormControlLabel, Checkbox } from '@mui/material';
const MuiCheckbox = () => {
  const [value, setValue] = useState<boolean>(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setValue(e.target.checked);
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label='I accept terms and conditions'
          control={<Checkbox checked={value} onChange={onChange} />}
        />
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
