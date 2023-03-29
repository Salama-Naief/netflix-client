import React ,{useState} from 'react';
import {MdLineStyle,MdTimeline,MdTrendingUp,MdOutlinePermIdentity,MdOutlineTextsms,MdOutlineMail,MdOutlineBarChart
,MdOutlineBusinessCenter,MdOutlineDynamicFeed,MdStorefront,MdReport,MdOutlineArrowBackIosNew,MdOutlineArrowForwardIos
} from "react-icons/md";
import {Link} from "react-router-dom";
import {BsCurrencyDollar} from 'react-icons/bs'

function SideBar() {

    const [items, setItems] = useState("home");
    const [side, setSide] = useState(false);

 /*   const sellectItem=(e,itemname)=>{
      setTitle(e.target.title);
       setItems(itemname);
    }
    console.log(title,items);*/
    return (
      <div className="relative flex left-0 top-0">
        
        <div className={`fixed flex h-full md:z-0 z-10 ${side?"right-auto":"right-full"}  md:right-auto bg-white top-3 m:left-5 pt-10 pl-6`}>
        <div>
            <div className='text-gray-500 text-sm mb-1 mt-2'>Dashboard</div>
            <div className='pr-12'>
               <Link to="/dashboard" onClick={()=>{setItems("home");setSide(false);}}  className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="home")?"bg-blue-100":"bg-white"}`}>
                   <MdLineStyle className='mr-0.5 text-lg'/>
                  <div className='text-sm font-medium'>Home</div>
               </Link>
             
            </div>
            <div className='text-gray-500 text-sm mb-1 mt-2.5'>Users Menu</div>
            <div className='pr-12'>
               <Link to="/dashboard/users" onClick={()=>{setItems("Users");setSide(false);}} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="Users")?"bg-blue-100":"bg-white"}`}>
                   <MdOutlinePermIdentity className='mr-0.5 text-lg'/>
                  <div className='text-sm font-medium'>Users</div>
               </Link>
               <Link to="/dashboard/createuser" onClick={()=>{setItems("Create User");setSide(false);}} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="Create User")?"bg-blue-100":"bg-white"}`}>
                   <MdOutlinePermIdentity className='mr-0.5 text-lg'/>
                  <div className='text-sm font-medium'>Create User</div>
               </Link>
            </div>
            <div className='text-gray-500 text-sm mb-1 mt-2.5'>List Menu</div>
            <div className='pr-12'>
               <Link to="/dashboard/lists" onClick={()=>{setItems("List");setSide(false);}} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="List")?"bg-blue-100":"bg-white"}`}>
                   <MdOutlinePermIdentity className='mr-0.5 text-lg'/>
                  <div className='text-sm font-medium'>Lists</div>
               </Link>
               <Link to="/dashboard/createlist" onClick={()=>{setItems("List User");setSide(false);}} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="List User")?"bg-blue-100":"bg-white"}`}>
                   <MdOutlinePermIdentity className='mr-0.5 text-lg'/>
                  <div className='text-sm font-medium'>Create List</div>
               </Link>
            </div>
            <div className='text-gray-500 text-sm mb-1 mt-2.5'>Movie Menu</div>
            <div className='pr-12'>
               <Link to="/dashboard/movies" onClick={()=>{setItems("Movies");setSide(false);}} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="Movies")?"bg-blue-100":"bg-white"}`}>
                   <MdStorefront className='mr-0.5 text-lg'/>
                  <div  className='text-sm font-medium'>Movies</div>
               </Link>
               <Link to="/dashboard/createmovie" onClick={()=>{setItems("Createmovie");setSide(false);}} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="Createmovie")?"bg-blue-100":"bg-white"}`}>
                   <MdStorefront className='mr-0.5 text-lg'/>
                  <div  className='text-sm font-medium'>Create Movie</div>
               </Link>
            </div>

       
            </div>
            
        <div onClick={()=>setSide(false)} className="cursor-pointer  text-5xl text-red-600 md:hidden"><MdOutlineArrowBackIosNew/></div>
        </div>
         <div onClick={()=>setSide(true)} className={`${side?"hidden":"block"} md:hidden cursor-pointer fixed mt-10  z-40 top-3 left-0 text-5xl text-red-600`}><MdOutlineArrowForwardIos/></div>
        </div>
    )
}

export default SideBar;
