import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { StoryPage } from "./pages/Story";
import LandingPage from "./pages/Landing";
import { EmirFoodPage } from "./pages/Friends/EmirFoodPage";
import { PatrickBooksPage } from "./pages/Friends/PatrickBooksPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/story" component={StoryPage} />
            <Route exact path="/" component={LandingPage} />
            <Route path="/emir" component={EmirFoodPage} />
            <Route path="/patrick" component={PatrickBooksPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
