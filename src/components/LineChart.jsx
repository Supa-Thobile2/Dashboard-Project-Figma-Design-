import React, { useRef } from 'react'
import { useEffect } from 'react';
import { Line } from 'react-chartjs-2'





function LineChart(props) {
 

  

  return (
   
    <div>
      <Line data={props.data}/>
    </div>
  )
}

export default LineChart