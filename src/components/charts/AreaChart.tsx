import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartData,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { GENERATE_LINE_CHART_OPTIONS } from './chartOptions';
import { useFormContext } from '@/context/form/formContext';
import { generateOptionsParams, getMappedAreaChartData } from './chartHelpers';
import { Result } from '@/context/form/types';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  annotationPlugin,
  Title,
  Tooltip,
  Filler,
  Legend
);

const data: ChartData<'line'> = {
  labels: [],
  datasets: [
    {
      fill: true,
      label: 'Liquid Assets',
      data: [],
      borderColor: 'rgb(118, 112, 215)',
      backgroundColor: '#A9B2FA',
      pointStyle: 'dash',
    },
  ],
};

export default function AreaChart() {
  const {
    result,
    formValues: {
      finalStep: {
        retirementGoals: { currentAge },
      },
    },
  } = useFormContext();

  const mappedData = getMappedAreaChartData(result as Result, data);

  const optionsParams = generateOptionsParams(
    result as Result,
    mappedData,
    currentAge
  );

  return (
    <Line
      redraw
      data={mappedData as any}
      options={GENERATE_LINE_CHART_OPTIONS(optionsParams)}
      style={{ height: 1000 }}
    />
  );
}
