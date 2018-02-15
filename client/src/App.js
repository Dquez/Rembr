import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import Callback from './components/Callback';
import {Login, Signup} from "./components/Login-Signup";
import {requireAuth} from './utils/AuthService';

const App = () =>
<Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={NoMatch} />
        {/* changed link to books component for testing purposes */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/books" onEnter={requireAuth} component={Books} />
        {/* <Route exact path="/books/:id" component={Detail} /> */}
        <Route path="/callback" component={Callback} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;

