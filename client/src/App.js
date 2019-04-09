import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Save from "./pages/Save";


function App() {
 
    return (
      <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Save} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
      </Router>
    );
  }


export default App;
