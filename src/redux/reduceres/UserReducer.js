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

const initState={
  user:null,
  allUsers:null,
  statsUser:null,
  msg_success:"",
  msg_fail:""
}
export default function AuthReducer(state=initState,action){
  switch (action.type) {

    case UPDATE_SUCCESS:
      return{
        ...state,
        msg_success:action.payload,
        msg_fail:""
      }
    case UPDATE_FAIL:
      return{
        ...state,
        msg_success:"",
        msg_fail:action.payload
      }
    case DELETE_SUCCESS:
      return{
        ...state,
        msg_success:action.payload,
        msg_fail:""
      }
    case DELETE_FAIL:
      return{
        ...state,
        msg_success:"",
        msg_fail:action.payload
      }
    case GET_USER_SUCCESS:
      return{
        ...state,
        user:action.payload,
        msg_fail:"",
        msg_success:""
      }
    case GET_USER_FAIL:
      return{
        ...state,
        user:null,
        msg_success:"",
        msg_fail:action.payload
      }
    case ALL_USER_SUCCESS:
      return{
        ...state,
        allUsers:action.payload,
        msg_fail:"",
        msg_success:""
      }
    case ALL_USER_FAIL:
      return{
        ...state,
        allUsere:null,
        msg_success:"",
        msg_fail:action.payload
      }
    case STATS_USER_SUCCESS:
      return{
        ...state,
        statsUser:action.payload,
        msg_fail:"",
        msg_success:""
      }
    case STATS_USER_FAIL:
      return{
        ...state,
        statsUser:null,
        msg_success:"",
        msg_fail:action.payload
      }

    
    default:return state
      // code
  }
}