import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from '@mui/material';
import React, { useState } from 'react';
const MuiRadioButton = () => {
  const [value, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value as string);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel>Years of experience</FormLabel>
        <RadioGroup name='job-exp-group' value={value} onChange={onChange} row>
          <FormControlLabel
            control={<Radio color='secondary' />}
            label='0-2'
            value='0-2'
          />
          <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
          <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
        </RadioGroup>
        <FormHelperText>Invalid </FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
