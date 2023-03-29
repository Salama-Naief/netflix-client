import {
LOAD_USER_SUCCESS,
LOAD_USER_FAIL,
REGISTER_SUCCESS,
REGISTER_FAIL,
LOGIN_SUCCESS,
LOGIN_FAIL,
LOADING,
LOGOUT_SUCCESS
} from "../constants/AuthConst";
import axios from "axios"; 
export const LoadUser=()=>(dispatch,getState)=>{
  console.log("loooding user")
  dispatch({type:LOADING});
  
  const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
    if(token){
      config.headers["x-auth-token"]=token;
      axios.get("http://localhost:5000/api/users/user")
           .then(res=>{
             console.log("user looded",res.data)
             dispatch({
               type:LOAD_USER_SUCCESS,
               payload:res.data.user
             })
           }).catch(e=>{
             console.log(e.response.data.msg)
               dispatch({
               type:LOAD_USER_FAIL,
               payload:e.response.data.msg
             })
           })
    }
  }

// reggister
export const Register=(user)=>(dispatch)=>{

  const config={
    headers:{
      "type-content":"application/json"
    }
  }
    
  const body=JSON.stringify({...user})
 console.log(user)
      axios.post("http://localhost:5000/api/auth/register",user)
           .then(res=>{
             console.log("res",res.data)
             dispatch({
               type:REGISTER_SUCCESS,
               payload:res.data
             })
           }).catch(e=>{
             console.log(e.response.data.msg)
               dispatch({
               type:REGISTER_FAIL,
               payload:e.response.data.msg
             })
           })
    }


//login
 export const Login=(user)=>(dispatch)=>{

      const config={
        headers:{
          "type-content":"application/json"
        }
      }
        
   //   const body=JSON.stringify({...user})
    console.log(user)
          axios.post("http://localhost:5000/api/auth/login",user)
               .then(res=>{
                 console.log("res data",res.data)
                 dispatch({
                   type:LOGIN_SUCCESS,
                   payload:res.data
                 })
               }).catch(e=>{
                 console.log(e.response.data.msg)
                   dispatch({
                   type:LOGIN_FAIL,
                   payload:e.response.data.msg
                 })
               })
        }
  
// log out 
export const Logout=()=>(dispatch)=>{
  dispatch({
    type:LOGOUT_SUCCESS,
    payload:""
  })
}