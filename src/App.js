import RootPage from './pages/RootPage';
import {Provider} from "react-redux";
import Store from './redux/store/Store';
import { useEffect, useState } from 'react';
import {LoadUser} from "./redux/actions/AuthAction"

function App() {
 const [user,setUser] = useState(null);
  
  useEffect(()=>{
      Store.dispatch(LoadUser());
   //  setUser(users)
  },[])
// console.log(users);
  return (
 <Provider store={Store}>
    <RootPage/>
   </Provider>
  );
}
export default (App);
