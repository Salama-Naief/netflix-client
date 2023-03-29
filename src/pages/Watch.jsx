import React from 'react'
import {MdArrowBack} from "react-icons/md";
import flying from "../img/flying.mp4";
import {Link,useLocation} from "react-router-dom";

export default function Watch() {
  const vedio=useLocation().vedio
  return (
    <div className='relative h-screen w-screen'  >
        <Link to="/" className='flex items-center text-lg absolute top-2 cursor-pointer z-10 text-white left-2 p-1 rounded-md' style={{background:"linear-gradient(to left,transparent 0%,rgb(0,0,0,0.2) 50%)"}}>
            <MdArrowBack className='mr-1 text-xl'/>
            <div >Home</div>
        </Link>
            <div className='w-full h-full '>
            
               <video src={vedio} controls autoPlay={true} muted={true}  className="w-full h-full object-cover"></video>
            </div>
            
       
    </div>
  )
}
