import { Button } from '@mui/material';

const MuiButton = () => {
  return (
    <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center' }}>
      <Button variant='text'>text</Button>
      <Button variant='contained'>contained</Button>
      <Button variant='outlined'>outline</Button>
    </div>
  );
};

export default MuiButton;
