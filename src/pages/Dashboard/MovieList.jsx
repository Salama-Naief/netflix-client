import React, { useEffect, useState } from 'react';
import {productData} from '../../domyData';
import {GetALLMovie,DeleteMovie} from '../../redux/actions/MoveAction';
import {MdDeleteOutline} from "react-icons/md"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
function MovieList({GetALLMovie,allMovies,DeleteMovie,msg_success,msg_fail}) {
  const [sellected,setSellected] = useState([]);
  const [reload,setReload] = useState(false);
  const [movies,setMovies] =useState(allMovies);
  const [sortedMovies,setSortedMovies] =useState(movies);

  useEffect(()=>{
    setSortedMovies(movies);
      
  },[reload,movies])
  useEffect(()=>{
    GetALLMovie();
    
  },[])

  const sortByTitle=()=>{
  
    const movie= allMovies.sort(function(a, b){
      const x =a.title.toLowerCase();
      const y = b.title.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    setMovies(movie);
    setReload(!reload)
  }
  const sortByGenre=()=>{
    const movie= allMovies.sort(function(a, b){
      const x = a.genre.toLowerCase();
      const y = b.genre.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
   setMovies(movie);
    setReload(!reload)
  }
  const sortByType=()=>{
    const movie= allMovies.sort(function(a, b){
      const x = a.type.toLowerCase();
      const y = b.type.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
   setMovies(movie);
    setReload(!reload)
  }
  const sortByYear=()=>{
    setMovies(allMovies.sort(function(a,b){
      return a.year-b.year;
    }))
    setReload(!reload)
    
  }

  const deleteUser=(id)=>{
   DeleteMovie(id);
   setMovies(allMovies.fliter(m=>m._id!==id))
    setReload(!reload)
  }
  
  const handleSellect=(id,value)=>{
     let checkedItems=[];
     if(value===true){
    if(sellected.filter(items=>items.id ===id).length){
        checkedItems =sellected.filter(items=>items.id !==id);
        setSellected([...checkedItems,{id,value}])
      }else{
      setSellected([...sellected,{id,value}])

    }
  }else{
    checkedItems =sellected.filter(items=>items.id !==id);
    setSellected([...checkedItems])
  }
  }
 
  const handleChecked=(id)=>{
    const ch=sellected.find(items=>items.id ===id);
    if(ch){
         return ch.value     
    }else{
      return false
    }
  }
  const sellectAll=()=>{
    if(!sellected.length){
        
      allMovies.forEach(user=>{
       
        setSellected(pre=>[...pre,{id:user.id,value:true}])
      })
    }else{
      setSellected([])
    }
  }

  const deleteAll=()=>{
    let dUser=[...movies]  
    if(sellected.length){
      sellected.forEach(user=>{
        dUser=dUser.filter(item=>item._id !==user._id);
      })
      setMovies(dUser);
      setReload(!reload);
    }
    setSellected([]);
  }
 
  return (
  <div className='pt-10'>
      <div className="p-4">
     <div className="p-4 box">
     <div className="capitalize pb-2 text-lg font-semibold "> Movies List</div>
   {msg_fail&&  <div className="capitalize pb-2 text-lg text-red-600 font-semibold "> {msg_fail}</div>}
   {msg_success&&  <div className="capitalize pb-2 text-lg text-green-500 font-semibold "> {msg_success}</div>}
         <table className="w-full " style={{borderSpacing:"20px"}}>
           <thead>
             <tr className=" ">
                    <th className="py-2 "> 
                     <div className="flex items-center">
                       <input type="checkbox" className='cursor-pointer'  onChange={()=>sellectAll()} checked={sellected.length?true:false} />
                       
                     </div>
                     </th>
                    <th ><div onClick={()=>sortByTitle()} className='cursor-pointer'>Movie</div></th>
                    <th ><div onClick={()=>sortByGenre()} className='cursor-pointer'>Genre</div></th>
                    
                    <th ><div onClick={()=>sortByYear()} className='cursor-pointer'>year</div> </th>
                    <th ><div onClick={()=>sortByType()} className='cursor-pointer'>Type</div> </th>
                    <th className="cursor-pointer ">
                      <div onClick={()=>deleteAll()}>{sellected.length? "Delete":"Action"}</div>
                    </th>
             </tr>
           </thead>
           <tbody>
            {sortedMovies?sortedMovies.map(movie=>(
              <tr key={movie._id} className="text-base font-normal">
               <th className='font-normal p-2'> 
                <div className='flex items-center'>
                    <input type="checkbox" className='cursor-pointer' checked={handleChecked(movie._id)} onChange={((e)=>handleSellect(movie._id,e.target.checked))} />
                    
                  </div>
               </th>
               <th className="font-normal p-2">
                  <div className="flex items-center">
                    <div className="h-10 w-10 overflow-hidden rounded-full mr-2">
                    <img className="w-full h-full object-cover" src={movie.img} alt="na" />
                  </div>
                    <div className="">
                        <div className="capitalize text-normal">{movie.title}</div> 
                    </div>
                </div>
               </th>
               <th  className="font-normal p-2 text-gray-700">
                 <div>{movie.genre}</div>
               </th>
               <th  className="font-normal p-2 text-gray-700">
                 <div>{movie.year}</div>
               </th>
               <th  className="font-normal p-2 text-gray-700">
                 <div>{ movie.isSeries?"Series":"Movie"}</div>
               </th>

               <th  className="font-normal flex items-center px-2 py-4">
                 <Link to={{pathname:"/dashboard/movieupdate/"+movie._id,movie:movie}} className="bg-green-500 cursor-pointer w-fit px-2 rounded-lg text-white">
                   Edit
                   </Link>
                   <div onClick={()=>deleteUser(movie._id)} className="text-2xl cursor-pointer w-fit px-2 rounded-lg text-red-500">
                     <MdDeleteOutline/>
                   </div>
               </th>
             </tr>
            )):"" 
            }
            </tbody>
         </table>
     </div>
  </div>
  </div>
  );
}
const mapStateToProps=(state)=>{
  return{
    allMovies:state.movieState.allMovies,
    msg_success:state.movieState.msg_success,
    msg_fail:state.movieState.msg_fail,
  }
}
export default connect(mapStateToProps,{GetALLMovie,DeleteMovie})(MovieList)