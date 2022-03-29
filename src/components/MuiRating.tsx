import React, { useState } from 'react';
import { Stack, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  const onChange = (e: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={onChange}
        precision={0.5}
        size='large'
        icon={<FavoriteIcon />}
        emptyIcon={<FavoriteBorderIcon />}
      />
    </Stack>
  );
};

export default MuiRating;
