import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Articles from "./pages/Articles";
import NoMatch from "./pages/NoMatch";
import Callback from './components/Callback';
import {requireAuth} from './utils/AuthService';

const App = () =>
<Router>
  <div>
      <Switch>
        <Route path="/callback" component={Callback} />
        <Route exact path="/" onEnter={requireAuth} component={Articles} />
        {/* <Route exact path="/books" component={Books} /> */}
        <Route component={NoMatch} />
      </Switch>
  </div>
</Router>;
export default App;

