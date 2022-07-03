import { styled, alpha } from '@mui/material/styles';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

import InputBase from '@mui/material/InputBase';

import InputLabel from '@mui/material/InputLabel';

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    top: '0',
    left: '1%',
  },
  '& label ': {
    top: '-10%',
  },
  '& .MuiInputBase-input': {
    height: '10px',
  },
  '&.MuiFormControl-root:not(:last-child)': {
    marginBottom: '20px',
  },

  '& .MuiInput-underline:after': {
    borderBottomColor: 'pink',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'gray',
    },
  },
});

export const Input = styled(TextField)({
  '& label.Mui-focused': {
    top: '-6%',
  },
  '& .MuiFilledInput-root': {
    maxHeight: '50px',
  },
  '&.MuiFormControl-root:not(:last-child)': {
    marginBottom: '20px',
  },
});

export const ButtonCss = styled(Button)({
  '&.MuiButton-root': {
    padding: '0px',
    textTransform: 'none',
    marginLeft: '10px',
    border: '1px solid rgba(25, 118, 210, 0.5);',
  },
});

export const ButtonContacts = styled(Button)({
  '&.MuiButton-root': {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
  },
});

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: '1px',
  },
  '&.MuiInputBase-root:not(:last-child)': {
    marginBottom: '20px',
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const CssLabel = styled(InputLabel)({
  '&.MuiInputLabel-root': {
    fontSize: '22px',
  },
});
