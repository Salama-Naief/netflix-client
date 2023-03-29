import {
LOAD_USER_SUCCESS,
LOAD_USER_FAIL,
REGISTER_SUCCESS,
REGISTER_FAIL,
LOGIN_SUCCESS,
LOGIN_FAIL,
LOADING,
LOGOUT_SUCCESS,
} from "../constants/AuthConst";

const initState={
  token:localStorage.getItem("token")||null,
  user:null,
  loading:null,
  loaded:null,
  msg:""
}
export default function AuthReducer(state=initState,action){
  
  switch (action.type) {
    case LOADING:
      return{
        ...state,
        loading:true
      }
    case LOAD_USER_SUCCESS:
      return{
        ...state,
        loaded:true,
        loading:false,
        user:action.payload
      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:{
      localStorage.setItem("token",action.payload.token)
      return{
        ...state,
        loaded:true,
        loading:false,
        user:action.payload.user,
        token:action.payload.token
      }
    }
    case LOAD_USER_FAIL:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      {
        localStorage.removeItem("token");
      return{
        ...state,
        loaded:false,
        loading:false,
        token:null,
        user:null,
        msg:action.payload
      }
      }
    
    default:return state
      // code
  }
}