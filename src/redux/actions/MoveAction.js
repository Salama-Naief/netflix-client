import {
GET_MOVIE_SUCCES,
GET_MOVIE_FAIL,
UPDATE_MOVIE_SUCCES,
UPDATE_MOVIE_FAIL,
DELETE_MOVIE_SUCCESS,
DELETE_MOVIE_FAIL,
GET_ALL_MOVIES_SUCCESS,
GET_ALL_MOVIES_FAIL,
GET_RANDUM_MOVIES_SUCCESS,
GET_RANDUM_MOVIES_FAIL,
LOADING_ALL,
LOADING_MOVIE,
LOADING_RANDUM,
CREATE_MOVIE_SUCCES,
CREATE_MOVIE_FAIL,
STATS_MOVIE_SUCCES,
STATS_MOVIE_FAIL
} from "../constants/MovieConst";

import axios from "axios";

//GET MOVIE
export const GetMovie=(id)=>(dispatch,getState)=>{
  dispatch({type:LOADING_MOVIE});
   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
   if(token){
     config.headers["x-auth-token"]=token;
      axios.get(`http://localhost:5000/api/movies/getmovie/${id}`,config)
           .then(res=>{
             dispatch({
               type:GET_MOVIE_SUCCES,
               payload:res.data.movie
             })
           }).catch(e=>{
               dispatch({
               type:GET_MOVIE_FAIL,
               payload:e.response.data.msg
             })
           })
    }
    }
//git all movies
export const GetALLMovie=(query)=>(dispatch,getState)=>{
  dispatch({type:LOADING_ALL});
   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
    if(token){
      config.headers["x-auth-token"]=token;
      axios.get(`http://localhost:5000/api/movies/allmovies${query?"?new="+query:""}`,config)
           .then(res=>{
             dispatch({
               type:GET_ALL_MOVIES_SUCCESS,
               payload:res.data.movies
             })
           }).catch(e=>{
               dispatch({
               type:GET_ALL_MOVIES_FAIL,
               payload:e.response.data.msg
             })
           })
    }
    }
    
  // GET RANDUM MOVIES
export const GetRandumMovie=()=>(dispatch,getState)=>{
  dispatch({type:LOADING_RANDUM});
   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
    if(token){
      config.headers["x-auth-token"]=token;
      axios.get(`http://localhost:5000/api/movies/getrandum`,config)
           .then(res=>{
             dispatch({
               type:GET_RANDUM_MOVIES_SUCCESS,
               payload:res.data.movies
             })
           }).catch(e=>{
               dispatch({
               type:GET_RANDUM_MOVIES_FAIL,
               payload:e.response.data.msg
             })
           })
    }
    }
  // MOVIE STATS
export const MovieStats=()=>(dispatch,getState)=>{
  dispatch({type:LOADING_RANDUM});
   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
    if(token){
      config.headers["x-auth-token"]=token;
      axios.get(`http://localhost:5000/api/movies/moviestats`,config)
           .then(res=>{
             dispatch({
               type:STATS_MOVIE_SUCCES,
               payload:res.data
             })
           }).catch(e=>{
               dispatch({
               type:STATS_MOVIE_FAIL,
               payload:e.response.data.msg
             })
           })
    }
    }
  // CREATE NEW MOVIE
export const CreateMovie=(movie)=>(dispatch,getState)=>{

   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
   
    if(token){
      config.headers["x-auth-token"]=token;
      axios.post(`http://localhost:5000/api/movies/create`,movie,config)
           .then(res=>{
             dispatch({
               type:CREATE_MOVIE_SUCCES,
               payload:res.data.msg
             })
           }).catch(e=>{
               dispatch({
               type:CREATE_MOVIE_FAIL,
               payload:e.response.data.msg
             })
           })
    }
    }
    
  //UPDATE MOVIE
export const UpdateMovie=(movie,id)=>(dispatch,getState)=>{

   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
   
    if(token){
      config.headers["x-auth-token"]=token;
      axios.put(`http://localhost:5000/api/movies/update/${id}`,movie,config)
           .then(res=>{
             dispatch({
               type:UPDATE_MOVIE_SUCCES,
               payload:res.data.msg
             })
           }).catch(e=>{
               dispatch({
               type:UPDATE_MOVIE_FAIL,
               payload:e.response.data.msg
             })
           })
    }
    }
  //DELETE MOVIE gfgf
export const DeleteMovie=(id)=>(dispatch,getState)=>{
  
   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
  
    if(token){
      config.headers["x-auth-token"]=token;
      axios.delete(`http://localhost:5000/api/movies/delete/${id}`,config)
           .then(res=>{
             dispatch({
               type:DELETE_MOVIE_SUCCESS,
               payload:res.data.msg
             })
           }).catch(e=>{
               dispatch({
               type:DELETE_MOVIE_FAIL,
               payload:e.response.data.msg
             })
           })
    }
}

    
