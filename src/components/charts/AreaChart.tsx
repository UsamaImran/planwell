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
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  LineControllerChartOptions,
  PluginChartOptions,
  ScaleChartOptions,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { LINE_CHART_OPTIONS } from './chartOptions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export type LineChartOptions = _DeepPartialObject<
  CoreChartOptions<'line'> &
    ElementChartOptions<'line'> &
    PluginChartOptions<'line'> &
    DatasetChartOptions<'line'> &
    ScaleChartOptions<'line'> &
    LineControllerChartOptions
>;

const labels = [50, 55, 60, 65, 70, 75, 80, 85];

const data: ChartData<'line'> = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'data',

      data: [
        {
          x: 50,
          y: 89.4,
        },
        {
          x: 55,
          y: 89.6,
        },
        {
          x: 60,
          y: 89.7,
        },
        {
          x: 65,
          y: 90,
        },
        {
          x: 70,
          y: 90,
        },
        {
          x: 75,
          y: 90,
        },
        {
          x: 80,
          y: 90,
        },
        {
          x: 85,
          y: 90,
        },
      ],
      borderColor: 'rgb(53, 162, 235,0.6)',
      backgroundColor: 'rgba(53, 162, 235, 0.2)',
    },
  ],
};

export default function AreaChart() {
  return <Line data={data} options={LINE_CHART_OPTIONS} />;
}
