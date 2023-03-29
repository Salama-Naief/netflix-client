import {
UPDATE_SUCCESS,
UPDATE_FAIL,
DELETE_SUCCESS,
DELETE_FAIL,
GET_USER_SUCCESS,
GET_USER_FAIL,
ALL_USER_SUCCESS,
ALL_USER_FAIL,
STATS_USER_SUCCESS,
STATS_USER_FAIL
} from "../constants/UserConst";
import axios from "axios";

//UPDATE USER
export const UpdateUser=(user,id)=>(dispatch,getState)=>{
  
   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
   if(token){
     config.headers["x-auth-token"]=token;
      axios.put(`http://localhost:5000/api/users/update/${id}`,user,config)
           .then(res=>{
             dispatch({
               type:UPDATE_SUCCESS,
               payload:res.data.msg
             })
           }).catch(e=>{
               dispatch({
               type:UPDATE_FAIL,
               payload:e.response.data.msg
             })
           })
    }
    }
    
//DELETE USER
export const DeleteUser=(id)=>(dispatch,getState)=>{
  
   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
   if(token){
     config.headers["x-auth-token"]=token;
      axios.delete(`http://localhost:5000/api/users/delete/${id}`,config)
           .then(res=>{
             dispatch({
               type:DELETE_SUCCESS,
               payload:res.data.msg
             })
           }).catch(e=>{
               dispatch({
               type:DELETE_FAIL,
               payload:e.response.data.msg
             })
           })
    }
    }
    
//GET USER BY ID
export const GetUser=(id)=>(dispatch,getState)=>{
  
   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
   if(token){
     config.headers["x-auth-token"]=token;
      axios.get(`http://localhost:5000/api/users/getuser/${id}`,config)
           .then(res=>{
             dispatch({
               type:GET_USER_SUCCESS,
               payload:res.data.user
             })
           }).catch(e=>{
               dispatch({
               type:GET_USER_FAIL,
               payload:e.response.data.msg
             })
           })
    }
    }
//GET ALL USERS
export const GetAllUsers=(query)=>(dispatch,getState)=>{
  
   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
   if(token){
     config.headers["x-auth-token"]=token;
      axios.get(`http://localhost:5000/api/users/getusers${query?"?new="+query:""}`,config)
           .then(res=>{
             dispatch({
               type:ALL_USER_SUCCESS,
               payload:res.data.user
             })
           }).catch(e=>{
               dispatch({
               type:ALL_USER_FAIL,
               payload:e.response.data.msg
             })
           })
    }
    }
//GET STATS USERS
export const GetStatsUsers=()=>(dispatch,getState)=>{
  
   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
   if(token){
     config.headers["x-auth-token"]=token;
      axios.get(`http://localhost:5000/api/users/userstats`,config)
           .then(res=>{
             dispatch({
               type:STATS_USER_SUCCESS,
               payload:res.data
             })
           }).catch(e=>{
               dispatch({
               type:STATS_USER_FAIL,
               payload:e.response.data.msg
             })
           })
    }
    }