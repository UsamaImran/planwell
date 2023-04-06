import { ISlider } from '@/components/input/Slider';
import { days, months, timePeriods } from '@/constants/constants';
import tinycolor from 'tinycolor2';

export const isClient = () => typeof window !== 'undefined';

export function darkenColor(hexColor: string, percent = 50): string {
  const color = tinycolor(hexColor);
  const darkerColor = color.darken(percent);
  return darkerColor.toHexString();
}

export const getTimeAndDate = () => {
  const currentTime = new Date();
  let greet = '';
  const day = days[currentTime.getDay()];
  const date = currentTime.getDate();
  const month = months[currentTime.getMonth()];
  const year = currentTime.getFullYear();
  const hours = currentTime.getHours();
  const dateMonth = day + ' ' + date + ' ' + month + ' ' + year + ' ';
  if (hours >= 5 && hours < 12) {
    greet = timePeriods[0];
  } else if (hours >= 12 && hours < 17) {
    greet = timePeriods[1];
  } else {
    greet = timePeriods[2];
  }
  return { day: dateMonth, greet };
};

export const formatNumberIntoCommas = (number: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const formattedNumber = formatter.format(number);
  return formattedNumber;
};

export const convertCommaStringBackToNumber = (val: string) =>
  parseFloat(`${val}`.replace(/,/g, ''));

export const addCommasToNumber = (value: string) =>
  value.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // add commas every 3 digits

export const getMinValue = (min?: number, inputType?: ISlider['inputType']) => {
  let res = '';
  switch (inputType) {
    case 'percent':
      res = `0%`;
      break;
    case 'money':
      res = '$0';
      break;
    default:
      res = ``;
  }
  return min || res;
};

export const getSliderLabel = (
  value: number,
  inputType: ISlider['inputType']
) => {
  let res = '';
  switch (inputType) {
    case 'money':
      res = `$${formatNumberIntoCommas(value)}`;
      break;
    case 'percent':
      res = `${formatNumberIntoCommas(value)}%`;
      break;
    default:
      res = `$${formatNumberIntoCommas(value)}`;
  }
  return res;
};
