import React,{useEffect,useState} from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

function HomeChart({data,dataKey,grid,title}) {
const [mobile,setMobile]=useState(0)
useEffect(()=>{
  
setMobile(window.innerWidth)
})

  return( 
    <div className='md:p-4 my-4'>
        <div className='box text-gray-500 p-2'>
          <div className='text-lg text-black px-3 font-semibold py-2'>{title}</div>
        <ResponsiveContainer width="100%" aspect={(mobile>540)?4/1:4/3}>
        <LineChart
          data={data}
        >
          {grid && <CartesianGrid strokeDasharray="5 5" />}
          <XAxis dataKey="month" />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default HomeChart;
