import "normalize.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import EnergyChart from "./components/energyChart/energyChart";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/comsumption">
          <EnergyChart />
        </Route>
        <Route exact path="/advices">
          <Home />
        </Route>
        <Route exact path="/about">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
