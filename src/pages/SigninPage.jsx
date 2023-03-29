import React, { useRef, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {Login} from "../redux/actions/AuthAction"
function SigninPage ({Login,userState}){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  

useEffect(()=>{
  console.log("state",userState)
},[])

  const handleSubmit=(e)=>{
    e.preventDefault();
    const user={email, password}
    Login(user)

  }
 
  return(
    
    <div className="text-white register flex justify-center w-screen h-screen relative">
      <div className="flex items-center justify-between md:px-10 px-4 py-3 absolute top-0 left-0 z-10 w-full">
        <div className="uppercase items-center text-red-600 text-3xl md:text-4xl pr-8 font-bold cursor-pointer">netflex</div>
      
      </div>
      <div className="md:w-1/3 w-full h-full flex justify-center items-center px-4">
         
             <form action="" onSubmit={(e)=>handleSubmit(e)} className="flex w-full flex-col justify-center py-5 px-6 bg-black rounded-md box">
               <div className="text-white md:text-3xl text-2xl py-4  font-semibold">Sign In</div>
               <input type="email"  onChange={(e)=>setEmail(e.target.value)} placeholder="Email or Phone" className="bg-gray-400 px-2 focus:outline-none placeholder:text-white md:text-xl py-2 my-3 rounded-md" />
               <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="bg-gray-400  px-2 focus:outline-none placeholder:text-white md:text-xl py-2 my-3 rounded-md" />
               <button type="submit" className="w-full text-white bg-red-600 py-2 md:text-xl my-3 rounded-md">Sign In</button>
               <div className="my-3">New in Netflix? <Link to="/register"><b>Sign up now.</b></Link></div>
               <div className="my-3">this page protected by NetFlix</div>
             </form>
         
      </div>
    </div>
    )
}
const mapStateToProps=(state)=>{
  return{
    userState:state.authState
  }
}
export default connect(mapStateToProps,{Login}) (SigninPage);