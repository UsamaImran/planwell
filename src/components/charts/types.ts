import {
  CoreChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  DatasetChartOptions,
  ScaleChartOptions,
  DoughnutControllerChartOptions,
  LineControllerChartOptions,
  BarControllerChartOptions,
} from 'chart.js';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { AnnotationPluginOptions } from 'chartjs-plugin-annotation';

export type annotations = _DeepPartialObject<AnnotationPluginOptions>;

export type PieOptions = _DeepPartialObject<
  CoreChartOptions<'pie'> &
    ElementChartOptions<'pie'> &
    PluginChartOptions<'pie'> &
    DatasetChartOptions<'pie'> &
    ScaleChartOptions<'pie'> &
    DoughnutControllerChartOptions
>;

export type LineChartOptions = _DeepPartialObject<
  CoreChartOptions<'line'> &
    ElementChartOptions<'line'> &
    PluginChartOptions<'line'> &
    DatasetChartOptions<'line'> &
    ScaleChartOptions<'line'> &
    LineControllerChartOptions
>;

export type BarChartOptions = _DeepPartialObject<
  CoreChartOptions<'bar'> &
    ElementChartOptions<'bar'> &
    PluginChartOptions<'bar'> &
    DatasetChartOptions<'bar'> &
    ScaleChartOptions<'bar'> &
    BarControllerChartOptions
>;

type annotationsData = { age: number; value: number | undefined };

export type annotationOptionsParams = {
  kidsGoals: annotationsData[];
  retirementGoals: annotationsData;
  minAge: number;
  maxValue: number;
};
