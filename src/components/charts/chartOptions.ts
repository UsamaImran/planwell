import { formatNumberIntoCommas } from '@/utils/utils';
import { LineChartOptions } from './AreaChart';
import { BarChartOptions } from './BarChart';
import { PieOptions } from './PieChart';

export const BAR_CHART_OPTIONS: BarChartOptions = {
  animation: {
    easing: 'easeInSine',
    duration: 500,
  },
  layout: {
    padding: {
      left: 20,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
  plugins: {
    datalabels: {
      offset: 25,
      anchor: 'center',
      align: 'left',
      display: true,
      formatter: (val) => {
        return '$' + formatNumberIntoCommas(Math.floor(val));
      },
      labels: {
        title: {
          font: {
            size: 14,
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
          size: 12,
          weight: 'bolder',
          lineHeight: 1,
          family: 'DM Sans',
        },

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
          size: 18,
          weight: 'bold',
          family: 'DM Sans',
        },
      },
    },

    y: {
      stacked: true,
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
      suggestedMax: 100000,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
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
      maxHeight: 100,
      textDirection: 'column',
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: true,
        font: {
          size: 12,
          weight: '600',
          lineHeight: 1,
          family: 'DM Sans',
        },

        color: '#000000',
        boxWidth: 15, // Set the width of the legend labels
        boxHeight: 18, // Set the height of the legend labels
        padding: 10, // Set the padding between the legend labels
        textAlign: 'left',
      },

      align: 'end',
      fullSize: true,
    },
  },
};

export const LINE_CHART_OPTIONS: LineChartOptions = {
  responsive: true,

  plugins: {
    datalabels: {
      //   display: false,
      font: {
        size: 15,
        weight: 'bolder',
      },
      formatter: (value: { x: number; y: number }, context: any) => {
        return value.y;
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
      ticks: {
        color: 'rgba(255, 255, 255, 0.5)',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};
