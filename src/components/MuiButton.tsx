import {
  Button,
  ButtonGroup,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicButtonIcon from '@mui/icons-material/Send';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import SendIcon from '@mui/icons-material/FormatUnderlined';
const MuiButton = () => {
  return (
    <div>
      <Stack spacing={2}>
        <Stack spacing={3} direction='row'>
          <Button variant='text'>text</Button>
          <Button variant='contained'>contained</Button>
          <Button variant='outlined'>outline</Button>
        </Stack>
        <Stack spacing='2' direction='row'>
          <Button variant='contained' color='primary'>
            primary
          </Button>
          <Button variant='contained' color='secondary'>
            secondary
          </Button>
          <Button variant='contained' color='error'>
            error
          </Button>
          <Button variant='outlined' color='warning'>
            warning
          </Button>
          <Button variant='contained' color='info'>
            info
          </Button>
          <Button variant='contained' color='success'>
            success
          </Button>
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
          <Button variant='contained' size='small'>
            Small
          </Button>
          <Button variant='contained' size='medium'>
            medium
          </Button>
          <Button variant='contained' size='large'>
            large
          </Button>
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
          <Button variant='contained' startIcon={<SendIcon />}>
            Send
          </Button>
          <Button variant='contained' endIcon={<SendIcon />} disableElevation>
            Send
          </Button>
        </Stack>
        <Stack direction='row'>
          <ButtonGroup variant='contained'>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction='row'>
          <ToggleButtonGroup value='bold' aria-label='text formatting'>
            <ToggleButton value='bold' aria-label='bold'>
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value='italic' aria-label='italic'>
              <FormatItalicButtonIcon />
            </ToggleButton>
            <ToggleButton value='underline' aria-label='underline'>
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiButton;
