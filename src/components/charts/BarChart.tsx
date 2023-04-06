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
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  ScaleChartOptions,
  BarControllerChartOptions,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { BAR_CHART_OPTIONS } from './chartOptions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ChartDataLabels,
  Legend
);

export type BarChartOptions = _DeepPartialObject<
  CoreChartOptions<'bar'> &
    ElementChartOptions<'bar'> &
    PluginChartOptions<'bar'> &
    DatasetChartOptions<'bar'> &
    ScaleChartOptions<'bar'> &
    BarControllerChartOptions
>;

const labels = ['Child 1', 'Child 2', 'Child 3', 'Child 4', 'Child 5'];

export const data: ChartData<'bar'> = {
  labels,
  datasets: [
    {
      label: 'Additional Amount You Need to Save (Monthly)',
      data: labels.map((_, index) => index + 83200),
      backgroundColor: '#4154DC',
      stack: 'Stack 0',
      borderRadius: 30,
      barThickness: 50,
    },
    {
      label: 'Amount you are currently saving (Monthly)',
      data: labels.map((_, index) => index + 90980),
      backgroundColor: '#A9B2FA',
      stack: 'Stack 0',
      borderRadius: 20,
      barThickness: 50,
    },
  ],
};

export function BarChart() {
  return <Bar options={BAR_CHART_OPTIONS} data={data} />;
}
