import Topbar from "../components/Dashboard/Topbar";
import SideBar from "../components/Dashboard/Sidebar";
import DashHome from "./Dashboard/DashHome";
import MovieUpdate from "./Dashboard/MovieUpdate";
import MovieDetails from "./Dashboard/MovieDetails";
import CreateUser from "./Dashboard/CreateUser";
import CreateMovie from "./Dashboard/CreateMovie";
import Lists from "./Dashboard/Lists";
import UpdateList from "./Dashboard/UpdateList";
import CreateList from "./Dashboard/CreateList";
//import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Route,Redirect} from 'react-router-dom';
import UsersList from "./Dashboard/UserList";
import MovieList from "./Dashboard/MovieList";
import User from "./Dashboard/User";

function Dashboard({user}) {
      console.log("dashoard user",user)
  return (
   
    <div className="px-2">
       <Topbar/>
       <div className="grid md:grid-cols-5">
         <div className="p-3">
           <SideBar/>
         </div>
         <div className="pt-3 col-span-4">
           
              <Route path="/dashboard" exact >
              {/*user?.isAdmin?(<DashHome />):(<Redirect to="/"/>)*/}
              <DashHome />
              </Route>
              
              <Route path="/dashboard/users">
                {/*user?.isAdmin?(<UsersList />):(<Redirect to="/"/>)*/}
                <UsersList />
              </Route>
              <Route path="/dashboard/user/:id">
                    {/*user?.isAdmin?(<User />):(<Redirect to="/"/>)*/}
                  <User/>
              </Route>
              <Route path="/dashboard/movies">
                    {/*user?.isAdmin?(<MovieList />):(<Redirect to="/"/>)*/}
                    <MovieList />
              </Route>
              <Route path="/dashboard/movieupdate/:id">
                    {/*user.isAdmin?(<MovieUpdate />):(<Redirect to="/"/>)*/}
                    <MovieUpdate />
              </Route>
              <Route path="/dashboard/moviedetails/:id">
                    {/*user.isAdmin?(<MovieDetails />):(<Redirect to="/"/>)*/}
                    <MovieDetails />
              </Route>
              <Route path="/dashboard/createuser">
                    {/*user.isAdmin?(<CreateUser />):(<Redirect to="/"/>)*/}
                    <CreateUser />
              </Route>
              <Route path="/dashboard/createmovie">
                    {/*user.isAdmin?(<CreateMovie />):(<Redirect to="/"/>)*/}
                    <CreateMovie />
              </Route>
              <Route path="/dashboard/lists">
                    {/*user.isAdmin?(<Lists />):(<Redirect to="/"/>)*/}
                  <Lists/>
              </Route>
              <Route path="/dashboard/createlist">
                    {/*user.isAdmin?(<CreateList />):(<Redirect to="/"/>)*/}
                    <CreateList />
              </Route>
              <Route path="/dashboard/updatelist/:id">
                    {/*user.isAdmin?(<UpdateList />):(<Redirect to="/"/>)*/}
                    <UpdateList />
              </Route>
           
            
         </div>
       </div>
    </div>
  
  );
}

export default Dashboard;
