import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";


function App() {
 
    return (
      <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
      </Router>
    );
  }


export default App;
