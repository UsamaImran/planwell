import {
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
} from '@mui/material';
import React from 'react';
import { getInputAdornmentStyles, styles } from './styles';

export interface IInput extends OutlinedInputProps {
  showAdornment?: boolean;
  inputType?: 'money' | 'percent';
}

const { inputStyles, inputComponentStyle } = styles;

function Input({
  showAdornment = true,
  inputType = 'money',
  sx,
  placeholder = '0',
  ...props
}: IInput) {
  return (
    <OutlinedInput
      {...props}
      sx={{ ...inputStyles, ...sx }}
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
              {inputType === 'money' || inputType === 'number' ? '$' : '%'}
            </span>
          </InputAdornment>
        )
      }
      endAdornment={
        inputType === 'percent' && (
          <InputAdornment position='end'>
            <span
              style={getInputAdornmentStyles(props.value as string, inputType)}
            >
              %
            </span>
          </InputAdornment>
        )
      }
    />
  );
}

export default Input;
