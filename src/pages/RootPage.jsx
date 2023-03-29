import Home from "../pages/Home";
import Dashboard from "./Dashboard";
import React from "react";
import Watch from "../pages/Watch";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import SigninPage from "../pages/SigninPage";
import Notfound from "../pages/Notfound";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { LoadUser } from "../redux/actions/AuthAction";
import UsersList from "./Dashboard/UserList";
import MovieList from "./Dashboard/MovieList";
import User from "./Dashboard/User";
import DashHome from "./Dashboard/DashHome";

function RootPage({ userState }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(userState.user);
  }, [userState.user]);
  console.log("ussser", user);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/series">
          <Home type="series" />
        </Route>
        <Route path="/movies">
          <Home type="movie" />
        </Route>
        <Route path="/watch">
          (<Watch />)
        </Route>
        <Route path="/register">
          <SignupPage />
        </Route>
        <Route path="/login">
          <SigninPage />
        </Route>

        <Route path="/dashboard">
          {/*user?(<Dashboard user={user}/>):(<Redirect to="/"/>)*/}
          <Dashboard user={user} />
        </Route>
        <Route>
          <Notfound />
        </Route>
      </Switch>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    userState: state.authState,
  };
};
export default connect(mapStateToProps)(RootPage);
