import React, { useState,useEffect } from 'react';
import {connect} from "react-redux"; 
import {Link,useLocation} from "react-router-dom"; 
import {MdOutlineThumbDown,MdOutlineThumbUp,MdPlayArrow,MdAdd} from "react-icons/md"
function MovieDetails() {
  const movie =useLocation().movie
  return (
        <div className=' w-full h-full' >
             <div className="">
               <div className={` `} >
               <div  className='w-full h-1/2 rounded-b-md overflow-hidden'>
                  <img src={movie?.img} className='w-full h-full object-cover'/>
               </div>
               <div className='mt-3 px-3'>
               <div className="md:flex justify-between items-center">
                 <div className='flex items-center text-black py-4 '>
                      <Link to={{pathname:"/watch",vedio:movie.vedio}} className='p-1 border-2 cursor-pointer mr-3 border-black text-xl rounded-full'><MdPlayArrow/></Link> 
                    <span className='p-1 border-2 cursor-pointer mr-3 border-black text-xl rounded-full'> <MdAdd/></span> 
                    <span className='p-1 border-2 cursor-pointer mr-3 border-black text-xl rounded-full'><MdOutlineThumbDown/></span> 
                    <span className='p-1 border-2 cursor-pointer mr-3 border-black text-xl rounded-full'><MdOutlineThumbUp/></span> 
                 </div>
                 <div className="flex justify-between items-center md:mt-0 mt-3">
                  <Link to={{pathname:"/dashboard/movieupdate/"+movie._id,movie:movie}} className="bg-green-500 cursor-pointer w-fit px-3 py-1 rounded-lg text-white">
                    Edit
                   </Link>
                  <div className="bg-red-600 cursor-pointer w-fit px-3 py-1 rounded-lg text-white">
                    Delete
                   </div>
                 </div>
                 </div>
                  <div className=" py-2">
                      <span className='mt-3 block'>Time :<span className="text-gray-600 ml-1">1 hour 14 mins</span></span>
                      <span className='mt-3 block '>Limit: <span className="text-gray-600 ml-1 border border-gray-600 mr-3 rounded p-1">+{movie?.limit}</span></span>
                      <span className="block mt-3">Year: <span className="text-gray-600 ml-1">{movie?.year}</span></span>
                      <div className='mt-3'>Genre: <span className="text-gray-600 ml-1">{movie?.genre}</span></div>
                      <div className='mt-3'>Type: <span className="text-gray-600 ml-1">{movie?.isSeries?"Series":"Movie"}</span></div>
                  </div>
                  <p lang='10' className="">
                  Description: <span className="text-gray-600 ml-1">
                    {movie?.desc}
                    </span>
                  </p>
        
               </div>
             </div>
          
        </div>
        </div>
    );
}

export default (MovieDetails)