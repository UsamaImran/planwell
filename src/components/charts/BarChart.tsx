import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { GET_BAR_CHART_OPTIONS } from './chartOptions';
import { getBarChartParams, getMappedBarChartData } from './chartHelpers';
import { useFormContext } from '@/context/form/formContext';
import { KidsSummary } from '@/context/form/types';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  annotationPlugin,
  Title,
  Tooltip,
  ChartDataLabels,
  Legend
);

const labels = ['Child 1', 'Child 2', 'Child 3', 'Child 4', 'Child 5'];

export const data: ChartData<'bar'> = {
  labels: [],
  datasets: [
    {
      label: 'Amount you are currently saving (Monthly)',

      data: labels.map((_, index) => index + 83200),
      backgroundColor: '#4154DC',
      stack: 'Stack 0',
      barThickness: 50,
      borderRadius: 20,
      borderSkipped: 'middle',
    },
    {
      label: 'Additional Amount You Need to Save (Monthly)',
      data: labels.map((_, index) => index + 90980),
      backgroundColor: '#A9B2FA',
      stack: 'Stack 0',
      borderRadius: 20,
      barThickness: 50,
      borderSkipped: 'middle',
    },
  ],
};

export function BarChart() {
  const {
    result,
    formValues: { kidsStep },
  } = useFormContext();
  const kidsData = result?.goal_summary.kids_summary as KidsSummary[];
  const alreadySaved = kidsStep.map((i) => i.monthlyContribution);
  const mappedData = getMappedBarChartData(data, kidsData, alreadySaved);

  const optionsParams = getBarChartParams(mappedData.datasets, kidsData);

  return (
    <Bar
      options={GET_BAR_CHART_OPTIONS(optionsParams)}
      data={mappedData}
      height={500}
      redraw
    />
  );
}
2;
