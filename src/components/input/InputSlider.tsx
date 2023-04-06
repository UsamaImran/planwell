import * as React from 'react';
import Box from '@mui/material/Box';

import Input, { IInput } from './Input';
import { Typography } from '@mui/material';
import Slider, { ISlider } from './Slider';
import { styles } from './styles';
import {
  addCommasToNumber,
  convertCommaStringBackToNumber,
  getSliderLabel,
} from '@/utils/utils';

const { sliderContainer, typographySection, sliderSection, inputSection } =
  styles;

interface IInputSlider {
  step?: number;
  min?: number;
  max?: number;
  label?: string;
  disabled?: boolean;
  displaySlider?: boolean;
  value?: number | string;
  type?: string;
  onChangeValue: (value: number | number[] | string) => void;
  inputProps?: IInput;
  sliderProps?: ISlider;
  name?: string;
  inputType?: 'money' | 'percent';
  displayInput?: boolean;
  inputReplacement?: React.ReactNode;
  errorMsg?: React.ReactNode;
}
function InputSlider({
  step = 10,
  min = 0,
  max = 2000000,
  onChangeValue,
  label = '',
  displaySlider = true,
  value = 0,
  type = 'text',
  inputProps = {},
  sliderProps = {},
  name = '',
  inputType = 'money',
  displayInput = true,
  inputReplacement = <></>,
  errorMsg = <></>,
}: IInputSlider) {
  const [myValue, setValue] = React.useState<
    number | string | Array<number | string>
  >(value || 0);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
    onChangeValue!(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: val } = event.target;
    if (convertCommaStringBackToNumber(val === '' ? '0' : val) <= max) {
      const value = `${convertCommaStringBackToNumber(val === '' ? '0' : val)}`;

      const formattedValue = addCommasToNumber(value);
      setValue(formattedValue);
      onChangeValue(convertCommaStringBackToNumber(formattedValue) as any);
    }
  };

  const finalValue = convertCommaStringBackToNumber(`${myValue}`);

  return (
    <Box sx={{ marginY: '45px' }}>
      <Box sx={sliderContainer}>
        <Box
          sx={{
            ...typographySection,
            width: !displaySlider ? '80%' : '20%',
          }}
        >
          <Typography>{label} </Typography>
        </Box>
        {displaySlider && (
          <Box sx={sliderSection}>
            <Slider
              inputType={inputType}
              value={finalValue}
              onChange={handleSliderChange}
              min={min}
              max={max}
              step={step}
              name={name}
              getAriaValueText={valueLabelFormat}
              valueLabelFormat={
                type !== 'age'
                  ? (value) => getSliderLabel(value, inputType)
                  : valueLabelFormat
              }
              valueLabelDisplay='auto'
              aria-labelledby='non-linear-slider'
              {...sliderProps}
            />
          </Box>
        )}

        <Box sx={inputSection}>
          {displayInput ? (
            <Input
              defaultValue={''}
              value={myValue.toLocaleString()}
              size='small'
              name={name}
              onChange={handleInputChange}
              inputType={inputType}
              inputProps={{
                step,
                min,
                max,
                name,
                type: inputType === 'percent' ? 'number' : 'text',
                'aria-labelledby': 'input-slider',
                pattern: '\\d*', // only allow numeric input
              }}
              showAdornment={type !== 'age'}
              {...inputProps}
            />
          ) : (
            <Box sx={{ width: '300px' }}>{inputReplacement}</Box>
          )}
        </Box>
      </Box>
      {errorMsg}
    </Box>
  );
}

export default InputSlider;

function valueLabelFormat(value: string | number) {
  let scaledValue = value.toLocaleString();
  return `${scaledValue}`;
}
