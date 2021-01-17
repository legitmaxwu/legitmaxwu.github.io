import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StoryPage } from "./pages/Story";
import LandingPage from "./pages/Landing";
import { PortfolioPage } from "./pages/Portfolio";
import { EmirFoodPage } from "./pages/Friends/EmirFoodPage";
import { PatrickBooksPage } from "./pages/Friends/PatrickBooksPage";
import { CindySmoothiesPage } from "./pages/Friends/CindySmoothiesPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/story" component={StoryPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route exact path="/" component={LandingPage} />
            <Route path="/emir" component={EmirFoodPage} />
            <Route path="/patrick" component={PatrickBooksPage} />
            <Route path="/cindy" component={CindySmoothiesPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
