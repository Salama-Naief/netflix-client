import React,{useEffect, useState} from 'react';
import { MdUpload } from 'react-icons/md';
import Storage from "../../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
 import {connect} from "react-redux";
 import {Register} from "../../redux/actions/AuthAction"
function CreateUser({Register}) {
    
    const [username,setUsername] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [isAdmin,setIsAdmin] =useState(false);
    const [image,setImage] =useState(null);

    useEffect(()=>{
      //setUser(usersData.current.find(user=>user.id===params.id));
      
    },[]);

    
    const handleUpdate=(e)=>{
      e.preventDefault();
      console.log(username,email,image, password,isAdmin)
    
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
        username,email, password,profilePic:downloadURL,isAdmin
      }
       Register(newUser)
    });
  }
);
}
  }
  console.log(image)  
  return (
    <div className='pt-10 w-full flex justify-center text-gray-900'>
      <div className='md:p-4'>
         <div className="flex items-center justify-between mb-6">
              <div className='text-2xl font-bold text-black'> Create User</div>
         
          </div>
              <div className='w-full  my-4 md:my-0'>
                  <div className='box px-5 py-6'>
                      <div className='md:pr-4 pb-4'>
                          
                          <form post="" >
                              <div className='text-gray-900'>
                                  <div className='capitalize '>username</div>
                                  <input value={username} onChange={(e)=>setUsername(e.target.value)}  type="text" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder="Username"/>
                              </div>
                             
                              <div className='text-gray-900 mt-5'>
                                  <div className='capitalize '>email</div>
                                  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder="Email"/>
                              </div>
                              <div className='text-gray-900 mt-5'>
                                  <div className='capitalize '>password</div>
                                  <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder="Password"/>
                              </div>
                              <div className="flex items-center mt-5">
                                <div className='capitalize mr-3 '>Series</div>
                                 <select value={isAdmin} onChange={(e)=>setIsAdmin(e.target.value)} name="genre" id="genre" className='bg-black focus:outline-none outline-white outline-2 text-white rounded-md px-1 py-1'>
                                   <option value={false} >false</option>
                                    <option value={true}>true</option>
                          
                                   </select>
                              </div>
                              <div className="flex items-center mt-5">
                              <label htmlFor="file" className="flex items-center">
                             <span className="mr-2"> ProfileImage: {image&&image.name}</span>  <MdUpload className='text-2xl ml-4 cursor-pointer'/>
                             </label>
                             <input onChange={e=>setImage(e.target.files[0])} type="file" id='file' className='hidden'/>
                            </div>
                            <div className='h-full relative mt-5'>
                                <button onClick={(e)=>handleUpdate(e)}  className='bg-blue-600 px-5 py-2 text-white rounded-lg'>Create</button>
                            </div>
                          </form>
                      </div>
                 
              </div>
          </div>
          
      </div>
    </div>
 );
}

export default connect(null,{Register})(CreateUser);
//export default (CreateUser);