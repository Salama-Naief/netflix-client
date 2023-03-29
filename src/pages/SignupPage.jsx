import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {Register} from '../redux/actions/AuthAction'
function SignupPage ({Register}){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [username,setUsername]=useState("");
  const emailRef=useRef(null);


  const handleGetStart=()=>{
      setEmail(emailRef.current.value);
  }
  const handleStart=(e)=>{
    e.preventDefault();  
    
    const user={email,password,username};
    Register(user);
  }
 
  return(
    
    <div className="text-white register w-screen h-screen relative">
      <div className="flex items-center justify-between md:px-10 px-4 py-3 absolute top-0 left-0 z-10 w-full">
        <div className="uppercase items-center text-red-600 text-3xl md:text-4xl pr-8 font-bold cursor-pointer">netflex</div>
        <Link to="/login" className="px-4 py-1 text-white bg-red-600 rounded-lg">Sign In</Link>
      </div>
      <div className="w-full h-full flex justify-center items-center px-4">
         <div  className="flex flex-col justify-center">
            <div className="flex justify-center md:text-5xl text-3xl font-semibold py-2 text-center">Unlimited movies , TV showes , and more. </div>
            <div className="flex justify-center md:text-2xl text-xl font-medium py-2 text-center">Watch anywhere. Cancel anytime. </div>
            <div className="flex justify-center py-2 text-lg text-center">Ready to watch? Enter your email to create or register your membership  </div>
            
              
              {
                email===""?(
                  <div className="flex justify-center py-2">
                    <div className="bg-white md:w-2/3 w-full flex items-center">
                      <input type="email" placeholder="Email or Phone " ref={emailRef} className="w-3/4  px-2 focus:outline-none text-black md:text-xl py-2" />
                      <button onClick={()=>handleGetStart()} className="md:w-1/4  text-white bg-red-600 py-2 px-1 md:text-xl">Get Started</button>
                      </div>
                 </div>
                ):(
                <form action="" onSubmit={(e)=>handleStart(e)} className=" py-2 ">
                  
                  <div className="bg-white w-full md:w-2/3 flex items-center">
                    <input type="text" value={username} placeholder="Username " onChange={(e)=>setUsername(e.target.value)} className="w-full  px-2 focus:outline-none text-black md:text-xl py-2" />
                  </div>
                  <div className="bg-white w-full md:w-2/3 flex items-center my-2">
                    <input type="password" value={password} placeholder="Password " onChange={(e)=>setPassword(e.target.value)} className="w-3/4  px-2 focus:outline-none text-black md:text-xl py-2" />
                    <button type="submit" className="w-1/4 text-white bg-red-600 py-2 px-1 md:text-xl">Start</button>
                  </div>
                </form>
                )
              }
         </div>
      </div>
    </div>
    )
}

export default connect(null,{Register})(SignupPage);