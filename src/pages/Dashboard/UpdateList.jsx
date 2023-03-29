import React,{useEffect, useRef, useState} from 'react';
import {useParams,useHistory,useLocation,Link} from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Storage from "../../Firebase";
 import {connect} from "react-redux";
 import {GetALLMovie} from '../../redux/actions/MoveAction';
 import {UpadeList} from '../../redux/actions/ListsAction';
import { MdOutlinePermIdentity,MdDateRange,MdPhoneIphone,MdMailOutline,MdLocationSearching,MdUpload } from 'react-icons/md';
 
 function CreateLists({GetALLMovie,allMovies,UpadeList}) {
    const [movie,setMovie] =useState([]);
    const [newMovies,setNewMovies] =useState([]);
    const [title,setTitle] =useState("");
    const [genre,setGenre] =useState("");
    const [type,setType] =useState("");
    const [movies,setMovies] =useState("");
    const [selectList,setSelectList] =useState([]);
    const [list,setList] =useState({});
    const history=useHistory();
     const location=useLocation()
     const params=useParams();
    useEffect(()=>{
      GetALLMovie();
    },[]);
    useEffect(()=>{
      
      setList(location.list);
    },[]);
    useEffect(()=>{
        if(genre){
          setNewMovies(allMovies.filter(m=>m.genre===genre))
            }else{
                  setNewMovies(allMovies)
            }
          },[genre,allMovies]);
        

    const handleSellect=(e)=>{
      let value=Array.from(e.target.selectedOptions,(option)=>option.value)
      setSelectList({...selectList,[e.target.name]:value})
    }

    const CreateLists=()=>{
      const newlist={
        title,
        genre,
        type,
        content:selectList.content
      }
      
    UpadeList(newlist,list._id)
    history.push("/dashboard/lists")
    }
    
    
    console.log("selected movie",movies)
    console.log(selectList)
  return (
    <div className='pt-10 w-full text-gray-900'>
      <div className='md:p-4 box flex justify-center '>
      <div>
         <div className="flex items-center justify-between mb-6">
              <div className='text-2xl font-bold text-black'> Edit List</div>
          </div>
                    
                      <div className=''>
                          
                          <form >
                              <div className='text-gray-900'>
                                  <div className='capitalize '>title</div>
                                  <input value={title} onChange={(e)=>setTitle(e.target.value)}  type="text" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder={list?.title}/>
                              </div>

                              <div className='text-gray-900 flex items-center mt-4'>
                                  <div className='capitalize mr-3'>Type</div>
                                      <select  onChange={(e)=>setType(e.target.value)} name="type" id="type" className='bg-black focus:outline-none outline-white outline-2 text-white rounded-md px-1 py-1'>
                                        <option >Type</option>
                                        <option value="movie" >Movie</option>
                                        <option value="series">Series</option>
                                     </select>
                              </div>
                            
                              <div className='text-gray-900 flex items-center mt-4'>
                                  <div className='capitalize mr-3'>Genre</div>
                                          <select  onChange={(e)=>setGenre(e.target.value)} name="genre" id="genre" className='bg-black focus:outline-none outline-white outline-2 text-white rounded-md px-1 py-1'>
                                            <option value="">Genre</option>
                                            <option value="adventure">Adventure</option>
                                            <option value="action">Action</option>
                                            <option value="comedy">Comedy</option>
                                            <option value="drama">Drama</option>
                                            <option value="horror">Horror</option>
                                            <option value="sci-fi">Sci-fi</option>
                                            <option value="westren">Westren</option>
                                            <option value="fantasy">Fantasy</option>
                                            <option value="romance">Romance</option>
                                            <option value="thriller">Thriller</option>
                                            <option value="animation">Animation</option>
                                            <option value="historical">Historical</option>
                                            <option value="decumantary">Decumentary</option>
                                         </select>
                                         </div>
                              <div className='text-gray-900 flex items-center mt-4'>
                                  <div className='capitalize mr-3'>Movies</div>
                                      <select multiple onChange={(e)=>handleSellect(e)} name="content" id="content" className='bg-black focus:outline-none outline-white outline-2 text-white rounded-md px-1 py-1'>
                                     {newMovies?.map(m=>(
                                       <option value={m._id}>{m.title}</option>
                                     ))
                                       
                                     }
                                     </select>
                              </div>
                              <div className='text-gray-900 flex items-center mt-5'>
                                 
                              </div>

                          </form>
                                <button onClick={()=>CreateLists()} className='bg-blue-600  px-5 py-1 text-white rounded-lg'>Update</button>
                      
                      </div>
      </div>
      </div>
    </div>
 );
}
const mapStateToProps=(state)=>{
  return{
    allMovies:state.movieState.allMovies
  }
}
export default connect(mapStateToProps,{GetALLMovie,UpadeList})(CreateLists);