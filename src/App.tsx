import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { StoryPage } from "./pages/Story";
import LandingPage from "./pages/Landing";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/story" component={StoryPage} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
