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
CREATE_MOVIE_SUCCES,
CREATE_MOVIE_FAIL,
LOADING_ALL,
LOADING_MOVIE,
LOADING_RANDUM,
STATS_MOVIE_SUCCES,
STATS_MOVIE_FAIL
} from "../constants/MovieConst";

const initState={
  randumMovie:null,
  movie:[],
  allMovies:null,
  loading_all:null,
  loading_movie:null,
  loading_randum:null,
  moviestats:[],
  msg_succes:"",
  msg_fail:"",
  
}
export default function AuthReducer(state=initState,action){
  switch (action.type) {
    case LOADING_RANDUM:
      return{
        ...state,
        loading_randum:true
      }
    case LOADING_MOVIE:
      return{
        ...state,
        loading_movie:true
      }
    case LOADING_ALL:
      return{
        ...state,
        loading_all:true
      }
    case GET_MOVIE_SUCCES:
      return{
        ...state,
        loading_movie:false,
        movie:[...state.movie,action.payload]
      }
    case GET_RANDUM_MOVIES_SUCCESS:
      return{
        ...state,
        loading_randum:false,
        randumMovie:action.payload
      }
    case GET_ALL_MOVIES_SUCCESS:
      return{
        ...state,
        loading_all:false,
        allMovies:action.payload
      }
    case GET_MOVIE_FAIL:
      return{
        ...state,
        loading_movie:false,
        movie:[],
        msg_fail:action.payload,
        msg_succes:""
      }
    case STATS_MOVIE_SUCCES:
      return{
        ...state,
        loading_movie:false,
        moviestats:action.payload,
        msg_fail:"",
        msg_succes:""
      }
    case STATS_MOVIE_FAIL:
      return{
        ...state,
        loading_movie:false,
        moviestats:[],
        msg_fail:action.payload,
        msg_succes:""
      }
    case GET_RANDUM_MOVIES_FAIL:
      return{
        ...state,
        loading_randum:false,
        randumMovie:null,
        msg_fail:action.payload
      }
    case GET_ALL_MOVIES_FAIL:
      return{
        ...state,
        loading_all:false,
        allMovies:null,
        msg_fail:action.payload,
         msg_succes:""
      }
    case UPDATE_MOVIE_SUCCES:
    case DELETE_MOVIE_SUCCESS:
    case CREATE_MOVIE_SUCCES:
      return{
        ...state,
        loading_all:false,
        msg_succes:action.payload,
         msg_fail:""
      }
    case UPDATE_MOVIE_FAIL:
    case DELETE_MOVIE_FAIL:
    case CREATE_MOVIE_FAIL:
      return{
        ...state,
        loading_all:false,
        msg_fail:action.payload,
         msg_succes:""
      }
    
    default:return state
      // code
  }
}