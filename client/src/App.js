import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Articles from "./pages/Articles";
import NoMatch from "./pages/NoMatch";
import Callback from './components/Callback';
import {requireAuth} from './utils/AuthService';

const App = () =>
<Router>
      <Switch>
        <Route exact path="/" component={Articles} />
        {/* <Route exact path="/books" onEnter={requireAuth} component={Books} /> */}
        <Route path="/callback" component={Callback} />
        <Route component={NoMatch} />
      </Switch>
  </Router>;

export default App;

