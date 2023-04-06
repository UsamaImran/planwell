import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  ScaleChartOptions,
  DoughnutControllerChartOptions,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';
import { darkenColor } from '@/utils/utils';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { PIE_CHART_OPTIONS } from './chartOptions';

export type PieOptions = _DeepPartialObject<
  CoreChartOptions<'pie'> &
    ElementChartOptions<'pie'> &
    PluginChartOptions<'pie'> &
    DatasetChartOptions<'pie'> &
    ScaleChartOptions<'pie'> &
    DoughnutControllerChartOptions
>;

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const data: ChartData<'pie'> = {
  labels: ['Monthly Mortgage Payments', 'Property Tax', 'HOA/ Other Fees'],
  datasets: [
    {
      label: '',
      data: [1500, 500, 203], // will get from api
      backgroundColor: [
        darkenColor('#61CB7A', 0),
        darkenColor('#156AE8', 0),
        darkenColor('#FF6628', 0),
      ],
      borderWidth: 0,
    },
  ],
};

export function PieChart() {
  return <Pie options={PIE_CHART_OPTIONS} data={data} />;
}
