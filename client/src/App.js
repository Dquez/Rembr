import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Articles from "./pages/Articles";
import NoMatch from "./pages/NoMatch";
import Callback from './components/Callback';

import {requireAuth} from './utils/AuthService';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" onEnter={requireAuth} component={Articles} />
        <Route path="/callback" component={Callback} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  ) 
}
export default App;

