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

const initailState={
  list:[],
  loading:null,
  msg_success:"",
  msg_fail:"",
}

export default function ListsReducer(state=initailState,action){
switch (action.type) {
  case LOADING:{
    return{
      ...state,
      loading:true
    }
  }
  case GET_LISTS_SUCCES:{
    return{
      ...state,
      loading:false,
      list:action.payload
    }
  }
  case GET_LISTS_FAIL:{
    return{
      ...state,
      loading:false,
      list:[],
     msg_success:"",
      msg_fail:action.payload
    }
  }
  
  case CREATE_LIST_SUCCES:
  case UPDATE_LISTS_SUCCES:
  case DELETE_LISTS_SUCCES:{
    return{
      ...state,
      loading:false,
      list:[],
      msg_success:action.payload,
      msg_fail:""
    }
  }
  case CREATE_LISTS_FAIL:
  case UPDATE_LISTS_FAIL:
  case DELETE_LISTS_FAIL:{
    return{
      ...state,
      loading:false,
      list:[],
      msg_fail:action.payload,
      msg_success:"",
      
    }
  }
  
  
  default:return state
    // code
}
  
  
}