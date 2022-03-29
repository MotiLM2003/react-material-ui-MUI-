import React, { useState } from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material';
const MuiAutocomplete = () => {
  const skills = ['html', 'css', 'javascript', 'typescript', 'react'];
  const [value, setValue] = useState<string | null>(null);
  return (
    <Stack width='250px' spacing={2}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label='skills' />}
        value={value}
        onChange={(e: any, newValue: string | null) => {
          setValue(newValue);
          console.log(newValue);
        }}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
