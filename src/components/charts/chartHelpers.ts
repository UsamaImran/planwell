import { BAR_CHART_OFFSET, IMAGES } from '@/constants/constants';
import { KidsSummary, Result } from '@/context/form/types';
import { formatNumberIntoCommas, getObjectKeys } from '@/utils/utils';
import { ChartData, ChartDataset } from 'chart.js';
import { annotationOptionsParams, annotations } from './types';

export const getMappedAreaChartData = (
  allResult: Result,
  data: ChartData<'line'>
) => {
  const result = allResult.net_worth_by_age;

  const resultArray =
    getObjectKeys(result)?.map((key) => ({
      x: key,
      y: result[key] >= 0 ? result[key] : 0,
    })) || [];

  const mappedData = {
    ...data,
    datasets: data.datasets.map((currentData) => ({
      ...currentData,
      data: resultArray,
    })),
  };

  return mappedData;
};

export const getMappedBarChartData = (
  data: ChartData<'bar'>,

  apiResponse: KidsSummary[],
  alreadySaving: number[]
) => {
  const amountAlreadySaving = apiResponse.map(
    (item) => item.additional_contribution_needed
  );
  data!.datasets![1]!.data = amountAlreadySaving;

  data.datasets[0].data = alreadySaving;

  const mappedData = { ...data };
  mappedData.labels = [...Array(apiResponse.length)].map(
    (_, index) => `Child ${index + 1}`
  );

  return mappedData;
};

export const getMappedPieChartData = () => {};

export const getChartAnnotations = ({
  kidsGoals,
  retirementGoals,
  minAge,
}: annotationOptionsParams): annotations => {
  const offset = (val: number) => val * 0.3;
  const obj: any = { annotations: {} };
  obj.annotations['fire_image'] = {
    id: '2',
    type: 'point',
    yValue: retirementGoals.value! + offset(retirementGoals.value!),
    xValue: retirementGoals.age - minAge,
    pointStyle: () => {
      const img = new Image();
      img.height = 40;
      img.width = 40;
      img.src = IMAGES.FIRE;

      return img;
    },
  };

  obj.annotations['fire_line'] = {
    id: '3',
    type: 'line',
    yMin: 0,
    xMin: retirementGoals.age - minAge,
    xMax: retirementGoals.age - minAge,
    yMax: retirementGoals.value! + offset(retirementGoals.value!),
    borderColor: 'black',
    borderWidth: 1,
    borderDash: [4, 4],
    z: -1,
  };

  kidsGoals.forEach((kid, index) => {
    obj.annotations[`child_${index + 1}_image`] = {
      id: index + 100,
      type: 'point',
      yValue: kid.value! + offset(kid.value!),
      xValue: kid.age - minAge,
      pointStyle: () => {
        const img = new Image();
        img.height = 40;
        img.width = 40;
        img.src = IMAGES.COLLEGE;

        return img;
      },
    };

    obj.annotations[`child_${index + 1}_line`] = {
      type: 'line',
      yMin: 0,
      xMin: kid.age - minAge,
      xMax: kid.age - minAge,
      yMax: kid.value! + offset(kid.value!),
      borderColor: 'black',
      borderWidth: 1,
      borderDash: [4, 4],
      z: -1,
    };
  });

  // obj.annotations['home_image'] = {
  //   id: '2',
  //   type: 'point',
  //   yValue: retirementGoals.value! + offset + offset,
  //   xValue: retirementGoals.age + 5 - minAge,
  //   pointStyle: (context: PartialEventContext) => {
  //     const img = new Image();
  //     img.height = 40;
  //     img.width = 40;
  //     let res: any = img;
  //     //@ts-ignore
  //     const val = +context?.raw?.x as number;
  //     res.src = IMAGES.HOME;

  //     return res;
  //   },
  // };

  // obj.annotations['home_line'] = {
  //   id: '3',
  //   type: 'line',
  //   yMin: 0,
  //   xMin: retirementGoals.age + 5 - minAge,
  //   xMax: retirementGoals.age + 5 - minAge,
  //   yMax: retirementGoals.value! + offset + offset,
  //   borderColor: 'black',
  //   borderWidth: 1,
  //   borderDash: [4, 4],
  //   z: -1,
  // };

  return obj satisfies annotations;
};

export const generateOptionsParams = (
  result: Result,
  mappedData: any,
  currentAge: number
) => {
  return {
    kidsGoals: result?.goal_summary.kids_summary.map((item) => ({
      age: item.goal_age,
      value: mappedData.datasets[0].data.find(
        (i: any) => +i.x === item.goal_age
      )?.y,
    }))!,
    retirementGoals: {
      age: result?.goal_summary.retirement_summary.goal_age as number,
      value: mappedData.datasets[0].data.find(
        (i: any) => +i?.x === result?.goal_summary.retirement_summary.goal_age
      )?.y,
    },
    minAge: currentAge,
    maxValue: Math.max(...mappedData.datasets[0].data.map((i: any) => i.y)),
  } satisfies annotationOptionsParams;
};

export const getBarChartOffset = (x: number, y: number) => {
  let res = BAR_CHART_OFFSET;

  if (x === 0 || y === 0) {
    res = 20;
  }

  return res;
};

export const getBarChartParams = (
  data: ChartDataset<'bar', (number | [number, number] | null)[]>[],
  kidsData: KidsSummary[]
) => {
  const needsToSave = data[0].data;
  const alreadySaving = data[1].data;

  const mappedData = needsToSave.map((item, index) => ({
    label: `Child ${index + 1}`,
    value: kidsData[index]?.contribution_needed,
    position:
      Math.abs(item as number) + Math.abs(alreadySaving[index] as number),
  }));

  return mappedData;
};

export const getBarChartAnnotations = (
  data: {
    label: string;
    value: number;
    position: number;
  }[]
): annotations => {
  const obj: any = { annotations: {} };

  data.forEach((item, index) => {
    const offset = item.position * 0.05;
    obj.annotations[`child_${index + 1}_sum`] = {
      type: 'label',
      content: `$${formatNumberIntoCommas(item.value)}`,
      yValue: item.position + offset,
      xValue: item.label,
      font: { size: 14, weight: 'semibold' },
    };
  });

  return obj satisfies annotations;
};
