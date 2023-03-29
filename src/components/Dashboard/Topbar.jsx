import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {MdSettings,MdOutlineNotificationsActive,MdOutlineLanguage} from "react-icons/md";
function Topbar({user}) {
    return (
        <div className='flex fixed left-0 top-0 w-full z-40 bg-white items-center justify-between py-2 px-5 shadow-md '>
            <Link to="/" className="">
               <div className="uppercase items-center text-red-500 text-3xl md:text-4xl pr-8 font-bold cursor-pointer">netflex</div>
            </Link>
            <div className='flex justify-items-end'>
                <div className='flex items-center'>
                    <div className='relative cursor-pointer mr-2.5'>
                        <MdOutlineNotificationsActive className='text-2xl'/>
                        <div className='absolute bg-red-600 text-white bottom-3.5 left-3 rounded-full text-xs w-3.5 flex justify-center items-center h-3.5'>12</div>
                    </div>
                    <div className='relative cursor-pointer mr-2.5'>
                        <MdOutlineLanguage className='text-2xl'/>
                    </div>
                    <div className='relative cursor-pointer mr-2.5'>
                        <MdSettings className='text-2xl'/>
                    </div>
                    <div className='w-8 h-8 rounded-full cursor-pointer overflow-hidden'>
                        <img className='object-cover w-full h-full' src={user?.profilePic} alt="grr" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToPrpos=(state)=>{
  return{
    user:state.authState.user
  }
}
export default connect(mapStateToPrpos)(Topbar)
