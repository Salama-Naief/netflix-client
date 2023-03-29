 
 import {combineReducers} from 'redux';
 import AuthReducer from './AuthReducer';
 import ListsReducer from './ListsReducer';
 import MovieReducer from './MovieReducer';
 import UserReducer from './UserReducer';
 
 export default combineReducers({
   authState:AuthReducer,
   movieState:MovieReducer,
   userState:UserReducer,
   listState:ListsReducer
 })