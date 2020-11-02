import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Home from "./Home/Home";
import Login from "./LogIn/LogIn";
import Register from "./Register/Register";
import LoggedIn from "./LoggedIn/LoggedIn";
import Logout from "./LogOut/LogOut";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route path={ROUTES.LOG_IN} component={Login}/>
          <Route path={ROUTES.REGISTER} component={Register}/>
          <Route path={ROUTES.LOGGED_IN} component={LoggedIn}/>
          <Route path={ROUTES.LOG_OUT} component={Logout}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
