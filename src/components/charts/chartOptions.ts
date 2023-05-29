import { BAR_CHART_OFFSET } from '@/constants/constants';
import { formatNumber, formatNumberIntoCommas } from '@/utils/utils';

import { getBarChartAnnotations, getChartAnnotations } from './chartHelpers';

import {
  annotationOptionsParams,
  BarChartOptions,
  LineChartOptions,
  PieOptions,
} from './types';

export const GET_BAR_CHART_OPTIONS = (
  data: { value: number; label: string; position: number }[]
): BarChartOptions => {
  return {
    animation: {
      easing: 'easeInSine',
      duration: 500,
    },
    maintainAspectRatio: false,
    responsive: true,

    plugins: {
      annotation: {
        ...getBarChartAnnotations(data),
      },
      tooltip: {
        filter: (e) => {
          return e.datasetIndex !== 2;
        },
      },
      datalabels: {
        offset: (context) => {
          const index = context.datasetIndex;
          return index === 2 ? -10 : 25;
        },
        anchor: (context) => {
          const index = context.datasetIndex;
          return index === 2 ? 'end' : 'center';
        },
        align: (context) => {
          const index = context.datasetIndex;
          return index === 2 ? 'center' : 'left';
        },
        display: true,
        formatter: (val, context) => {
          const index = context.datasetIndex;
          const finalVal = index === 2 ? val - BAR_CHART_OFFSET : val;
          return '$' + formatNumberIntoCommas(Math.floor(finalVal));
        },
        color: (context) => {
          const index = context.datasetIndex;
          return index === 2 ? '#333' : 'gray';
        },
        padding: {
          left: 0,
        },
        labels: {
          title: {
            display: (ctx) => {
              const index = ctx.dataIndex;
              return ctx.dataset.data[index] !== 0 ? true : false;
            },
            font: {
              size: 12,
              weight: 'bold',
              family: 'DM Sans',
            },
          },
        },
      },

      title: {
        display: true,
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 10,
            weight: 'bolder',
            lineHeight: 1,
            family: 'DM Sans',
          },

          borderRadius: 20,
          boxWidth: 15,
          boxHeight: 18,
          padding: 20,
          textAlign: 'left',
        },
      },
    },
    scales: {
      x: {
        stacked: true,

        grid: {
          display: false,
        },

        ticks: {
          font: {
            size: 15,
            weight: 'bold',
            family: 'DM Sans',
          },
          color: '#333',
          align: 'center',
        },
      },

      y: {
        grid: {
          display: false,
          lineWidth: 0.5,
        },
        ticks: {
          crossAlign: 'center',
          font: {
            size: 14,
            weight: 'bold',
            family: 'DM Sans',
          },
          callback: function (value) {
            return '$' + formatNumberIntoCommas(value as number);
          },
        },
        suggestedMin: 0,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };
};
export const PIE_CHART_OPTIONS: PieOptions = {
  animation: {
    easing: 'easeInQuart',
    duration: 500,
  },
  plugins: {
    datalabels: {
      color: 'white',
      font: {
        size: 16,
        weight: 'bold',
      },
      formatter: (val) => {
        return '$' + formatNumberIntoCommas(Math.floor(val as number));
      },
      borderRadius: 50,
    },
    title: {
      display: true,
    },
    legend: {
      maxHeight: 200,
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: true,
        font: {
          size: 13,
          weight: '600',
          lineHeight: 2,
          family: 'DM Sans',
        },
        color: '#000000',
        boxWidth: 15, // Set the width of the legend labels
        boxHeight: 18, // Set the height of the legend labels
        padding: 10, // Set the padding between the legend labels
        textAlign: 'left',
      },

      align: 'center',
    },
  },
};

export const GENERATE_LINE_CHART_OPTIONS = ({
  kidsGoals,
  retirementGoals,
  minAge,
  maxValue,
}: annotationOptionsParams): LineChartOptions => {
  return {
    responsive: true,
    plugins: {
      annotation: {
        ...getChartAnnotations({
          kidsGoals,
          retirementGoals,
          minAge,
          maxValue,
        }),
      },

      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += formatNumber(+context.parsed.y.toFixed(2));
            return `$ ${label}`;
          },
        },
      },
      datalabels: {
        display: false,
        font: {
          size: 12,
          weight: 'bolder',
        },
        padding: 10,
        formatter: (value: { x: number; y: number }, context: any) => {
          return `$${formatNumber(+value.y.toFixed(2))} `;
        },
      },
      legend: {
        position: 'bottom',
        display: false,
      },
      title: {
        display: false,
        text: 'TOTAL LIQUID ASSETS BY AGE',
      },
    },
    scales: {
      y: {
        // max: maxValue + maxOffset,
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
          display: false,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          display: false,
        },
        title: {
          display: false,
          text: 'Y-axis Label',
          color: 'rgba(255, 255, 255, 0.5)',
          font: {
            size: 14,
            weight: 'bold',
          },
          padding: {
            top: 20,
            bottom: 10,
          },
        },
      },
      x: {
        grid: {
          display: false,
          color: 'red',
          z: 2,
        },
        ticks: {
          color: '#333',
          display: true,
          stepSize: 5,
          autoSkipPadding: 40,
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };
};
