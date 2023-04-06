import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  Checkbox as MuiCheckBox,
  CheckboxProps,
  Typography,
} from '@mui/material';

interface ICheckBox extends CheckboxProps {
  label?: string;
  onValueChange?: (val: boolean) => void;
}

export default function Checkbox({
  label,
  onValueChange,
  ...props
}: ICheckBox) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<MuiCheckBox {...props} />}
        label={<Typography>{label}</Typography>}
        onChange={(e, value) => {
          e.preventDefault();
          onValueChange && onValueChange(value);
        }}
      />
    </FormGroup>
  );
}
