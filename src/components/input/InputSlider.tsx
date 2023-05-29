import * as React from 'react';
import Box from '@mui/material/Box';

import Input, { IInput } from './Input';
import { Typography } from '@mui/material';
import Slider, { ISlider } from './Slider';
import { styles } from './styles';
import {
  addCommasToNumber,
  convertCommaStringBackToNumber,
  getErrorIndicator,
  getErrorMessage,
  getSliderLabel,
} from '@/utils/utils';
import { useState } from 'react';

const { sliderContainer, typographySection, sliderSection, inputSection } =
  styles;

interface IInputSlider {
  step?: number;
  min?: number;
  max?: number;
  label?: string;
  disabled?: boolean;
  displaySlider?: boolean;
  value?: number | string | null;
  type?: string;
  onChangeValue: (value: number | number[] | string) => void;
  inputProps?: IInput;
  sliderProps?: ISlider;
  name?: string;
  inputType?: 'money' | 'percent' | 'age';
  displayInput?: boolean;
  inputReplacement?: React.ReactNode;
  errorMsg?: React.ReactNode;
}
function InputSlider({
  step,
  min = 0,
  max = 2000000,
  onChangeValue,
  label = '',
  displaySlider = true,
  value = '',
  type = 'text',
  inputProps = {},
  sliderProps = {},
  name = '',
  inputType = 'money',
  displayInput = true,
  inputReplacement = <></>,
  errorMsg = <></>,
}: IInputSlider) {
  const [myValue, setMyValue] = useState<
    number | string | Array<number | string> | null
  >(value);
  const [values, setValue] = useState(0);
  const [myStep, setStep] = useState(1);
  const [scale, setScale] = useState(1000);

  const isAge = inputType === 'age';
  const isPercent = inputType === 'percent';
  const limit = isAge || isPercent ? max : max / scale;

  React.useEffect(() => {
    const numberValue = convertCommaStringBackToNumber(myValue as string);

    const initialValue = isAge || isPercent ? numberValue : numberValue / scale;

    setValue(initialValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myValue, scale]);

  React.useEffect(() => {
    if (max === 60000 || max === 5000) {
      setScale(100);
    }
    if (max === 500_000) setScale(500);
    if (max === 50000000) {
      setScale(10000);
    }
  }, [max]);

  const handleSliderChange = (event: Event, val: number | number[]) => {
    const newValue = val as number;
    const finalValue = isAge || isPercent ? newValue : newValue * scale;
    setMyValue(finalValue);
    onChangeValue(finalValue);

    if (isAge || isPercent) {
      setStep(1);
      setValue(newValue);
      return;
    }
    if (values === scale && newValue === 900) {
      setStep(20);
      setValue(980);
      return;
    }
    if (values === 50 && newValue === 45) {
      setStep(1);
      setValue(49);
      return;
    }
    if (newValue >= 0 && newValue < 50) {
      setStep(1);
      setValue(newValue);
      return;
    }
    if (newValue >= 50 && newValue <= 100) {
      setStep(5);
      setValue(newValue);
      return;
    }
    if (newValue >= 100 && newValue <= 500) {
      setStep(10);
      setValue(newValue);
      return;
    }
    if (newValue >= 500 && newValue < scale) {
      setStep(20);
      setValue(newValue);
      return;
    }
    if (newValue >= scale && newValue <= Infinity) {
      setStep(100);
      setValue(newValue);
      return;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: val } = event.target;

    const newValue = !isAge
      ? convertCommaStringBackToNumber(val === '' || val == '-' ? '0' : val) /
        scale
      : val;

    setValue((newValue as number) * scale);

    if (newValue <= max) {
      const value = `${convertCommaStringBackToNumber(val === '' ? '0' : val)}`;

      const formattedValue = addCommasToNumber(value);
      setMyValue(formattedValue);

      onChangeValue(
        val !== ''
          ? (convertCommaStringBackToNumber(formattedValue) as any)
          : null
      );
    }
  };

  const stringToNumber = convertCommaStringBackToNumber(myValue as string);

  return (
    <Box sx={{ marginY: '45px' }}>
      <Box sx={sliderContainer}>
        <Box
          sx={{
            ...typographySection,
            width: !displaySlider ? '75%' : '20%',
          }}
        >
          <Typography>{label} </Typography>
        </Box>
        {displaySlider && (
          <Box sx={sliderSection}>
            <Slider
              inputType={inputType}
              value={values}
              onChange={handleSliderChange}
              min={min}
              max={getMaxValue(values as number, limit)}
              step={myStep}
              name={name}
              getAriaValueText={valueLabelFormat}
              valueLabelFormat={
                type !== 'age'
                  ? (value) => getSliderLabel(value, inputType)
                  : valueLabelFormat
              }
              valueLabelDisplay='auto'
              aria-labelledby='non-linear-slider'
              scale={(value) =>
                isAge || isPercent ? value : calculateValue(value, scale)
              }
              {...sliderProps}
            />
          </Box>
        )}
        <Box
          sx={{
            ...inputSection,
            width: !displaySlider ? '21.5%' : '25%',
          }}
        >
          {displayInput ? (
            <Input
              value={myValue === 'NaN' ? null : myValue?.toLocaleString()}
              sx={{ width: '100%' }}
              size='small'
              name={name}
              onChange={handleInputChange}
              inputType={inputType}
              error={getErrorIndicator(stringToNumber, min, max)}
              errorMessage={getErrorMessage(stringToNumber, min, max)}
              inputProps={{
                step,
                min,
                max,
                name,
                type: isPercent ? 'number' : 'text',
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

const getMaxValue = (values: number, limit: number) =>
  values + 100 <= limit ? values + 100 : limit;

function calculateValue(value: number, scale = 1000) {
  return value * scale;
}
