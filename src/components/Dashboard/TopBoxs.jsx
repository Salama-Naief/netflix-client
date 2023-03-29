import React from 'react';
import {BsArrowDownShort,BsArrowUpShort} from "react-icons/bs"
function TopBoxs() {
  return <div className="grid md:grid-cols-3">
      {/*frist box*/}
      <div className='md:p-4 my-4'>
        <div className='box py-4 px-8 rounded-xl'>
            <div className='text-xl '>Revenue</div>
            <div className="flex items-center py-2 px-2" >
                <div className='text-3xl font-medium'> $2,500</div>
                <div className='flex items-center ml-4'>
                    <div>-11.4</div>
                    <BsArrowDownShort className='text-red-600 text-2xl'/>
                </div>
            </div>
            <div className="text-gray-500 text-sm">Compared to last month</div>
        </div>
      </div>
      {/*second box*/}
      <div className='md:p-4 my-4'>
        <div className='box py-4 px-8 rounded-xl'>
            <div className='text-xl '>Sales</div>
            <div className="flex items-center py-2 px-2" >
                <div className='text-3xl font-medium'> $4,500</div>
                <div className='flex items-center ml-4'>
                    <div>-5.4</div>
                    <BsArrowDownShort className='text-red-600 text-2xl'/>
                </div>
            </div>
            <div className="text-gray-500 text-sm">Compared to last month</div>
        </div>
      </div>
      {/*third box*/}
      <div className='md:p-4 my-4'>
        <div className='box py-4 px-8 rounded-xl'>
            <div className='text-xl '>Cost</div>
            <div className="flex items-center py-2 px-2" >
                <div className='text-3xl font-medium'> $2,30</div>
                <div className='flex items-center ml-4'>
                    <div>+1.4</div>
                    <BsArrowUpShort className='text-green-600 text-2xl'/>
                </div>
            </div>
            <div className="text-gray-500 text-sm">Compared to last month</div>
        </div>
      </div>
  </div>;
}

export default TopBoxs;
