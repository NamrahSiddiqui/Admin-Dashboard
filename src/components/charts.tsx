import React from 'react'

interface BarChartProps{
    horizontal?: boolean;
    data_1: number[];
    data_2: number[];
    title_1: string;
    title_2: string;
    bgColor_1: string;
    bgColor_2: string;
    labels?: string[];
}

const BarChart = ({data_1 = [],
    data_2 = [],
    title_1,
    title_2,
    bgColor_1,
    bgColor_2,
    horizontal = false,
    labels = months}:BarChartProps) => {
  return (
    <div>
      
    </div>
  )
}

export default BarChart
