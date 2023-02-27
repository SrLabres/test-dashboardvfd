import React from 'react';
import Chart from 'react-apexcharts';

export default function BarChart() {
  const options = {
    chart: {
      id: 'bar-chart'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yaxis: {
      title: {
        text: 'Number of Visitors'
      }
    }
  };

  const series = [
    {
      name: 'Visitors',
      data: [50, 70, 90, 120, 100, 80, 60, 70, 90, 100, 110, 120]
    }
  ];

  return (
    <Chart options={options} series={series} type="bar" />
  );
}