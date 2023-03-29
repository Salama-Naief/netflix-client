import {
GET_LISTS_SUCCES,
GET_LISTS_FAIL,
CREATE_LIST_SUCCES,
CREATE_LISTS_FAIL,
UPDATE_LISTS_SUCCES,
UPDATE_LISTS_FAIL,
DELETE_LISTS_SUCCES,
DELETE_LISTS_FAIL,
LOADING
} from "../constants/ListsConst";
import axios from "axios"

//get lists
export const GetLists=(type,genre)=>(dispatch,getState)=>{
  dispatch({type:LOADING});
   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
  
    if(token){
      config.headers["x-auth-token"]=token;
        axios.get(`http://localhost:5000/api/lists/getlist${type?"?type="+type:""}${genre?"&genre="+genre:""}`,config)
       .then(res=>{
         dispatch({
           type:GET_LISTS_SUCCES,
           payload:res.data.list
         })
       }).catch(e=>{
         dispatch({
           type:GET_LISTS_FAIL,
           payload:e.response.data.msg
         })
       })
    }
}
//CREATE LISTS
export const CreateList=(list)=>(dispatch,getState)=>{
  
   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
  
    if(token){
      config.headers["x-auth-token"]=token;
        axios.post(`http://localhost:5000/api/lists/create`,list,config)
       .then(res=>{
         dispatch({
           type:CREATE_LIST_SUCCES,
           payload:res.data.msg
         })
       }).catch(e=>{
         dispatch({
           type:CREATE_LISTS_FAIL,
           payload:e.response.data.msg
         })
       })
    }
}

//UPDATE LISTS
export const UpadeList=(list,id)=>(dispatch,getState)=>{
  
   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
  
    if(token){
      config.headers["x-auth-token"]=token;
        axios.put(`http://localhost:5000/api/lists/update/${id}`,list,config)
       .then(res=>{
         dispatch({
           type:UPDATE_LISTS_SUCCES,
           payload:res.data.msg
         })
       }).catch(e=>{
         dispatch({
           type:UPDATE_LISTS_FAIL,
           payload:e.response.data.msg
         })
       })
    }
}
//DELETE LISTS
export const DeleteList=(id)=>(dispatch,getState)=>{
  
   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
  
    if(token){
      config.headers["x-auth-token"]=token;
        axios.delete(`http://localhost:5000/api/lists/delete/${id}`,config)
       .then(res=>{
         dispatch({
           type:DELETE_LISTS_SUCCES,
           payload:res.data.msg
         })
       }).catch(e=>{
         dispatch({
           type:DELETE_LISTS_FAIL,
           payload:e.response.data.msg
         })
       })
    }
}