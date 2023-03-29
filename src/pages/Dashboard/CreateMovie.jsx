import React,{useEffect, useRef, useState} from 'react';
import {users} from "../../domyData";
import {useParams,useLocation} from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Storage from "../../Firebase";
 import {connect} from "react-redux";
 import {CreateMovie} from "../../redux/actions/MoveAction"
import { MdOutlinePermIdentity,MdDateRange,MdPhoneIphone,MdMailOutline,MdLocationSearching,MdUpload } from 'react-icons/md';


 function CreateMovies({CreateMovie}) {
    const [movie,setMovie] =useState({});
    const [uploadedFiles,setUploadedFiles] =useState([]);
    const usersData =useRef(users);
    const [title,setTitle] =useState("");
    const [genre,setGenre] =useState("");
    const [desc,setDesc] =useState("");
    const [limit,setLimit] =useState("");
    const [year,setYear] =useState("");
    const [isSeries,setIsSeries] =useState(false);
    const [img,setImg] =useState(null);
    const [progress,setProgress] =useState(0);
    const [imgSm,setImgSm] =useState(null);
    const [trailer,setTrailer] =useState(null);
    const [vedio,setVedio] =useState(null);
    const [num,setNum] =useState(0);
    const params=useParams();
     const location=useLocation()
    useEffect(()=>{
      //setUser(usersData.current.find(user=>user.id===params.id));
      setMovie(location.movie)
    },[params.id]);

    const UploadFiles=()=>{
           
        if(img,imgSm,trailer,vedio ){
            const files=[{file:img,label:"img"},{file:imgSm,label:"imgSm"},{file:trailer,label:"trailer"},{file:vedio,label:"vedio"}]
            files.forEach(item=>{
                const fileName = new Date().getTime() +item.label
                //const uploadTask = Storage.ref(`/userImgs/${fileName}`).put(image);
                const storageRef = ref(Storage, `/userImgs/${fileName}`);

                const uploadTask = uploadBytesResumable(storageRef, item.file);
                uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress1 = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progress1)
                    console.log('Upload is ' + progress + '% done');
                
                }, 
                (error) => {
                    // Handle unsuccessful uploads
                console.log(error)
                }, 
                () => {
                

                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUploadedFiles(prev=>{
                        return{...prev , [item.label]:downloadURL}
                        });
                        setNum(prev=>prev+1 );
                    }
            )
        })
    })
    }
}
    const handleUpdate=()=>{
        const newMovie={
            title,
            limit,
            year,
            desc,
            genre,
            isSeries,
            img:uploadedFiles.img,
            imgSm:uploadedFiles.imgSm,
            trailer:uploadedFiles.trailer,
            vedio:uploadedFiles.vedio,
           
        }
         
        CreateMovie(newMovie)
        setDesc(null)
        setGenre(null)
        setImg(null)
        setImgSm(null)
        setTitle(null)
        setLimit(null)
        setYear(null)
        setGenre(false)
        setTrailer(null)
        setVedio(null)
        setNum(0)

    }
    console.log(uploadedFiles);
  return (
    <div className='pt-10 flex justify-center text-gray-900'>
      <div className='md:p-4'>
         <div className="flex items-center justify-between mb-6">
              <div className='text-2xl font-bold text-black'> Create Movie</div>
          </div>

              <div className='w-full  my-4'>
                  <div className='box grid md:grid-cols-2 p-4'>
                      <div className='pb-4 md:mx-10'>
                          
                          <form action="post">
                              <div className='text-gray-900'>
                                  <div className='capitalize '>title</div>
                                  <input value={title} onChange={(e)=>setTitle(e.target.value)}  type="text" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder={"Title"}/>
                              </div>
                              <div className='text-gray-900 mt-4'>
                                  <div className='capitalize '>limit</div>
                                  <input value={limit} onChange={(e)=>setLimit(e.target.value)} type="Number" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder={"limit"}/>
                              </div>
                              <div className='text-gray-900 mt-4'>
                                  <div className='capitalize '>year</div>
                                  <input value={year} onChange={(e)=>setYear(e.target.value)} type="email" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder={"year"}/>
                              </div>
                              <div className='text-gray-900 flex items-center mt-4'>
                                  <div className='capitalize mr-3'>Genre</div>
                                      <select value={genre} onChange={(e)=>setGenre(e.target.value)} name="genre" id="genre" className='bg-black focus:outline-none outline-white outline-2 text-white rounded-md px-1 py-1'>
                                        <option >Genre</option>
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
                                  <div className='capitalize mr-3 '>Series</div>
                                 <select value={genre} onChange={(e)=>setIsSeries(e.target.value)} name="genre" id="genre" className='bg-black focus:outline-none outline-white outline-2 text-white rounded-md px-1 py-1'>
                                   <option value={false} >false</option>
                                    <option value={true}>true</option>
                          
                                   </select>
                              </div>
                              <div className='text-gray-900 mt-3'>
                                  <div className='capitalize '>Description</div>
                                  <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} type="textarea" col="10" row="15" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder={"description"}/>
                              </div>
                            
                             
                          </form>
                      </div>
                      <div className="pb-4 md:flex md:justify-end md:mx-16">
                         <div className='flex flex-col '>
                            <div className='flex items-center h-fit mt-10 md:mt-0 '>
                            <div className="w-10 h-10 rounded-lg overflow-hidden mr-3">
                                <img className="w-full h-full object-cover" src={movie?.imgSm} alt="" />
                            </div>
                            <div>Trailerimage</div>
                             <label htmlFor="small">
                                <MdUpload className='text-2xl ml-4 cursor-pointer'/>
                             </label>
                             <input onChange={e=>setImgSm(e.target.files[0])} type="file" id='small' className='hidden'/>
                            </div>
                            <div className='flex items-center h-fit pt-10'>
                            <div className="w-10 h-10 rounded-lg overflow-hidden mr-3">
                                <img className="w-full h-full object-cover" src={movie?.img} alt="" />
                            </div>
                            <div>Coverimage</div>
                             <label htmlFor="cover">
                                <MdUpload className='text-2xl ml-4 cursor-pointer'/>
                             </label>
                             <input onChange={e=>setImg(e.target.files[0])} type="file" id='cover' className='hidden'/>
                            </div>
                     

                       <div className="w-full mb-20">
                       <div className='flex items-center h-fit pt-10'>
                           
                            <div>Vedio</div>
                             <label htmlFor="vedio">
                                  <MdUpload className='text-2xl ml-4 cursor-pointer'/>
                             </label>
                             <input onChange={e=>setVedio(e.target.files[0])} type="file" id='vedio' className='hidden'/>
                         </div>
                       <div className='flex items-center h-fit pt-10'>
                          
                            <div>Trailer</div>
                             <label htmlFor="trailer">
                                <MdUpload className='text-2xl ml-4 cursor-pointer'/>
                             </label>
                             <input onChange={e=>setTrailer(e.target.files[0])} type="file" id='trailer' className='hidden'/>
                         </div>
                         <div className='relative h-3 w-full overflow-hidden mt-6 rounded-full'>
                               <div className="absolute top-0 left-0 bg-green-500 h-full" style={{width:`${progress}%`}}></div>
                         </div>
                         </div>
                         
                            {
                                (num>=5)?(
                                    <div className='h-full relative'>
                                    <button onClick={()=>handleUpdate()} className='bg-blue-600 absolute bottom-0 w-full px-5 py-1 text-white rounded-lg'>Create</button>
                                 </div>
                                ):(
                                <div className='h-full relative'>
                                   <button onClick={()=>UploadFiles()} className='bg-blue-600 absolute bottom-0 w-full px-5 py-1 text-white rounded-lg'>Upload</button>
                               </div>
                                )
                            }
                         </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    
 );
}

export default connect(null,{CreateMovie})(CreateMovies);