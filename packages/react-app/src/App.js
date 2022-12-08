import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Home from "./components/Home";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

export default ({ history, onSignIn }) => {
  return (
    <div style={{borderWidth:5,borderColor:'#eee',borderStyle:'ridge'}}>
        <Router history={history}>
          <Switch>
            <Route path="/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
            <Route path="/">
              <Home onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
    </div>
  );
};