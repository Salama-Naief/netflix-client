import React,{useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom"
import {useParams,useLocation} from "react-router-dom";
import { MdOutlinePermIdentity,MdDateRange,MdPhoneIphone,MdMailOutline,MdLocationSearching,MdUpload } from 'react-icons/md';
import Storage from "../../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
 import {connect} from "react-redux";
 import {UpdateUser} from "../../redux/actions/UserAction"
function User({UpdateUser}) {
    const [user,setUser] =useState({});
    
    const [username,setUsername] =useState("");
    const [isAdmin,setIsAdmin] =useState(false);
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");

    const [image,setImage] =useState(null);
    const params=useParams();
     const location=useLocation()
    useEffect(()=>{
      //setUser(usersData.current.find(user=>user.id===params.id));
      setUser(location.user)
    },[params.id]);

    
      
   const handleUpdate=()=>{
     // e.preventefault();
          
if(image){
const fileName = new Date().getTime() +image.name
//const uploadTask = Storage.ref(`/userImgs/${fileName}`).put(image);
const storageRef = ref(Storage, `/userImgs/${fileName}`);

const uploadTask = uploadBytesResumable(storageRef, image);
uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
 
  }, 
  (error) => {
    // Handle unsuccessful uploads
  console.log(error)
  }, 
  () => {
console.log("ssddd",uploadTask)

     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      const newUser={
        username:username,
        email:email,
        password,
        profilePic:downloadURL,
        isAdmin:isAdmin
      }
       UpdateUser(newUser,user._id)
    });
  }
);
}else if(user.profilePic){
    const newUser={
        username:username,
        email:email,
        password,
        profilePic:user.profilePic,
        isAdmin
      }
       UpdateUser(newUser,user._id)
}
    

  }
  console.log("image",image)  
    
  return (
    <div className='pt-10 text-gray-900'>
      <div className='md:p-4'>
         <div className="flex items-center justify-between mb-6">
              <div className='text-2xl font-bold text-black'> Edit User</div>
              <Link to="/dashboard/createuser" className='bg-green-600 px-5 py-1 text-white rounded-lg'>Create</Link>
          </div>

          <div className='grid md:grid-cols-3 my-4 md:my-0'>
              <div className='md:pr-4 w-full md:col-span-1 '>
                <div className='box p-4'>
                    <div className="flex items-center">
                        <div className="h-10 w-10 overflow-hidden rounded-full mr-6">
                            <img className="w-full h-full object-cover" src={user?.profilePic} alt="" />
                        </div>
                       
                    </div> 
                    
                    <div className=''>
                        <div className="text-gray-500 capitalize my-6"> user details</div>
                        <div className='flex items-center mb-3'>
                           <MdOutlinePermIdentity className='text-lg mr-2'/>
                           <div>{user?.username}</div>
                        </div>
                        
                        <div className='flex items-center mb-3'>
                           <MdMailOutline className='text-lg mr-2'/>
                           <div>{user?.email}</div>
                        </div>
                        <div className='flex items-center mb-3'>
                           <MdLocationSearching className='text-lg mr-2'/>
                           <div>{user?.isAdmin?"Admin":"User"}</div>
                        </div>
                        
                    
                    
                </div>
              </div>
              <div className='w-full md:col-span-2 md:pl-4 my-4 md:my-0'>
                  <div className='box grid grid-cols-2 p-4'>
                      <div className='md:pr-4 pb-4'>
                          <div className='mb-8 mt-1 text-xl font-bold '>Edit</div>
                          <form action="">
                              <div className='text-gray-900'>
                                  <div className='capitalize '>username</div>
                                  <input value={username} onChange={(e)=>setUsername(e.target.value)}  type="text" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder={user?.username}/>
                              </div>
                              
                              <div className='text-gray-900 mt-3'>
                                  <div className='capitalize '>email</div>
                                  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder={user?.email}/>
                              </div>
                              <div className='text-gray-900 mt-3'>
                                  <div className='capitalize '>phone</div>
                                  <input value={password}  onChange={(e)=>setPassword(e.target.value)} type="password" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder="password"/>
                              </div>
                             
                              <div className="flex items-center mt-5">
                                <div className='capitalize mr-3 '>Series</div>
                                 <select value={isAdmin} onChange={(e)=>setIsAdmin(e.target.value)} name="genre" id="genre" className='bg-black focus:outline-none outline-white outline-2 text-white rounded-md px-1 py-1'>
                                   <option value="false" >false</option>
                                    <option value="true" >true</option>
                          
                                   </select>
                              </div>
                             
                          </form>
                      </div>
                      <div className="py-6 flex justify-end">
                         <div className='flex flex-col '>
                            <div className='flex items-center h-fit pt-14'>
                            <div className="w-24 h-24 rounded-lg overflow-hidden">
                                <img className="w-full h-full object-cover" src={user?.profilePic} alt="" />
                            </div>
                             <label htmlFor="file">
                                <MdUpload className='text-2xl ml-4 cursor-pointer'/>
                             </label>
                             <input onChange={e=>setImage(e.target.files[0])} type="file" id='file' className='hidden'/>
                            </div>
                             <div className="mt-4">{image&&image.name}</div>
                            <div className='h-full relative'>
                                <button onClick={()=>handleUpdate()} className='bg-blue-600 absolute bottom-0 w-full px-5 py-1 text-white rounded-lg'>Update</button>
                            </div>
                         </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    </div>
 );
}

export default connect(null,{UpdateUser})(User)