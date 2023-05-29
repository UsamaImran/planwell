import React from 'react';
import {
  Box,
  Slider as MuiSlider,
  SliderProps,
  Typography,
} from '@mui/material';
import { styles } from './styles';
import { getMinValue, getSliderLabel, getStepsRange } from '@/utils/utils';
import { TEXT_GRAY } from '@/styles/colors';

const { subContainer, sliderThumb } = styles;

export type ISlider = SliderProps & {
  inputType?: 'percent' | 'money' | 'age';
};

function Slider({ inputType = 'money', max, min, ...props }: ISlider) {
  return (
    <Box sx={{ ...subContainer, width: '100%' }}>
      <Typography id='input-slider' gutterBottom sx={{ color: TEXT_GRAY }}>
        {getMinValue(min, inputType)}
      </Typography>
      <MuiSlider
        {...props}
        step={props.step || getStepsRange((props.value as number) || 1)}
        valueLabelFormat={
          props.valueLabelDisplay == 'auto'
            ? props.valueLabelFormat
            : (value) => getSliderLabel(value, inputType)
        }
        aria-labelledby='input-slider'
        valueLabelDisplay='auto'
        sx={sliderThumb}
        max={max}
        min={min}
      />
    </Box>
  );
}

export default Slider;
