import React, { useState } from "react"
import ReactApexCharts from 'react-apexcharts';
export function PieChart(props) {
    const {name} = props
    const [chartData, setChartData] = useState({
        options: {
            title: {
              text: name
            },
            legend: {
              position: 'bottom'
            }
          },
          series: [44, 55, 13, 43, 22]
      });
      
    return(
        <ReactApexCharts
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width="100%"
      />
    )
}