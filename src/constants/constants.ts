import { LIGHT_GREEN, LIGHT_BLUE, LIGHT_PINK } from '@/styles/colors';

export const timePeriods = ['Good Morning', 'Good after Noon', 'Good Evening'];

export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const MEDIA_QUERY = Object.freeze({
  SMALL: `(max-width:700px)`,
  MEDIUM: `(max-width:1100px)`,
  LARGE: `(max-width:1024px)`,
});

export const MEDIUM_AND_SMALL_SCREEN =
  `@media ${MEDIA_QUERY.SMALL} and ${MEDIA_QUERY.MEDIUM}` as const;

export const STATES_LIST = [
  { label: 'Alabama', value: 'AL' },
  { label: 'Alaska', value: 'AK' },
  { label: 'Arizona', value: 'AZ' },
  { label: 'Arkansas', value: 'AR' },
  { label: 'California', value: 'CA' },
  { label: 'Colorado', value: 'CO' },
  { label: 'Connecticut', value: 'CT' },
  { label: 'Delaware', value: 'DE' },
  { label: 'District Of Columbia', value: 'DC' },
  { label: 'Florida', value: 'FL' },
  { label: 'Georgia', value: 'GA' },
  { label: 'Hawaii', value: 'HI' },
  { label: 'Idaho', value: 'ID' },
  { label: 'Illinois', value: 'IL' },
  { label: 'Indiana', value: 'IN' },
  { label: 'Iowa', value: 'IA' },
  { label: 'Kansas', value: 'KS' },
  { label: 'Kentucky', value: 'KY' },
  { label: 'Louisiana', value: 'LA' },
  { label: 'Maine', value: 'ME' },
  { label: 'Maryland', value: 'MD' },
  { label: 'Massachusetts', value: 'MA' },
  { label: 'Michigan', value: 'MI' },
  { label: 'Minnesota', value: 'MN' },
  { label: 'Mississippi', value: 'MS' },
  { label: 'Missouri', value: 'MO' },
  { label: 'Montana', value: 'MT' },
  { label: 'Nebraska', value: 'NE' },
  { label: 'Nevada', value: 'NV' },
  { label: 'New Hampshire', value: 'NH' },
  { label: 'New Jersey', value: 'NJ' },
  { label: 'New Mexico', value: 'NM' },
  { label: 'New York', value: 'NY' },
  { label: 'North Carolina', value: 'NC' },
  { label: 'North Dakota', value: 'ND' },
  { label: 'Ohio', value: 'OH' },
  { label: 'Oklahoma', value: 'OK' },
  { label: 'Oregon', value: 'OR' },
  { label: 'Pennsylvania', value: 'PA' },
  { label: 'Rhode Island', value: 'RI' },
  { label: 'South Carolina', value: 'SC' },
  { label: 'South Dakota', value: 'SD' },
  { label: 'Tennessee', value: 'TN' },
  { label: 'Texas', value: 'TX' },
  { label: 'Utah', value: 'UT' },
  { label: 'Vermont', value: 'VT' },
  { label: 'Virginia', value: 'VA' },
  { label: 'Washington', value: 'WA' },
  { label: 'West Virginia', value: 'WV' },
  { label: 'Wisconsin', value: 'WI' },
  { label: 'Wyoming', value: 'WY' },
];

export function blockInvalidChar(event: any) {
  if (event.key.length === 1 && /[^\d.]+/g.test(event.key)) {
    event.preventDefault();
  }
}

export const CHILD_GOALS_RADIO_OPTIONS = [
  { id: 1, title: 'College Type', value: 'COLLEGE' },
  { id: 2, title: 'Custom Cost: 4-Year', value: 'CUSTOM' },
];

export const CHILD_COLLEGE_OPTIONS = [
  {
    id: 1,
    title: `Public In-State:`,
    type: 'PUBLIC_IN_STATE',
    value: 42240,
  },
  {
    id: 2,
    title: `Public Out-State:`,
    type: 'PUBLIC_OUT_STATE',
    value: 108080,
  },
  {
    id: 3,
    title: `Private:`,
    type: 'PRIVATE',
    value: 150600,
  },
];

export const EXPENSES_OPTIONS = [
  {
    id: 1,
    color: LIGHT_GREEN,
    label: 'Super Saver:  Expenses are 50% of Income',
    type: 'super_saver',
  },
  {
    id: 2,
    color: LIGHT_BLUE,
    label: 'Average Saver:  Expenses are 75% of Income',
    type: 'moderate',
  },
  {
    id: 3,
    color: LIGHT_PINK,
    label: 'Spender:  Expenses are 90% of Income',
    type: 'high',
  },
];

export const RESULT_SECTION_ID = 'results-section';

export const END_POINT = 'https://planwell-server-production.up.railway.app';

export const BAR_CHART_OFFSET = 500;

export const IMAGES = {
  FIRE: '/assets/images/saving_type_2.svg',
  HOME: '/assets/images/saving_type_1.svg',
  COLLEGE: '/assets/images/saving_type_3.svg',
};
