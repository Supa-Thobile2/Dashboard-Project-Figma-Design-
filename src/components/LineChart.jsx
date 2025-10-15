import React, { useRef } from 'react'
import { useEffect } from 'react';
import {Line} from 'react-chartjs-2'





function LineChart() {
 
const chartRef = useRef(null);

useEffect(()=>{
  const chart = chartRef.current.chartInstance;
  return()=>{
    chart.destroy();
  };

}, []);

  const data = {
      labels:['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri'],
      datasets:[
        {
          label: 'Tasks',
          data: [0, 30, 60,70, 100]
        }
      ]
    };

  

  return (
   
    <div>
      <Line data={data} ref={chartRef}/>
    </div>
  )
}

export default LineChart