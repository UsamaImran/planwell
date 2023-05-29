import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';
import { darkenColor } from '@/utils/utils';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { PIE_CHART_OPTIONS } from './chartOptions';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const data: ChartData<'pie'> = {
  labels: ['Monthly Mortgage Payments', 'Property Tax', 'HOA/ Other Fees'],
  datasets: [
    {
      label: '',
      data: [3248, 912, 418], // will get from api
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
