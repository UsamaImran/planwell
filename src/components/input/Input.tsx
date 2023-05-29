import {
  Box,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
  Typography,
} from '@mui/material';
import React from 'react';
import { getErrorStyles, getInputAdornmentStyles, styles } from './styles';

export interface IInput extends OutlinedInputProps {
  showAdornment?: boolean;
  inputType?: 'money' | 'percent' | 'age';
  errorMessage?: string;
}

const { inputStyles, inputComponentStyle } = styles;

function Input({
  showAdornment = true,
  inputType = 'money',
  sx,
  placeholder = '0',
  error,
  errorMessage,
  ...props
}: IInput) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <OutlinedInput
        {...props}
        sx={{ ...inputStyles, ...getErrorStyles(error || false), ...sx }}
        inputProps={{
          placeholder: placeholder,
          ...props.inputProps,
          //@ts-ignore
          style: inputComponentStyle,
        }}
        autoComplete='off'
        size='small'
        startAdornment={
          inputType !== 'percent' &&
          showAdornment && (
            <InputAdornment position='start'>
              <span style={getInputAdornmentStyles(props.value as string)}>
                {inputType === 'money' || props.type === 'number' ? '$' : '%'}
              </span>
            </InputAdornment>
          )
        }
        endAdornment={
          inputType === 'percent' && (
            <InputAdornment position='end'>
              <span
                style={getInputAdornmentStyles(
                  props.value as string,
                  inputType
                )}
              >
                %
              </span>
            </InputAdornment>
          )
        }
        error={error}
      />
      {error && (
        <Typography color={'red'} variant='subtitle2'>
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
}

export default Input;
