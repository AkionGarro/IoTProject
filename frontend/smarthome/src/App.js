import "normalize.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import EnergyChart from "./components/energyChart/energyChart";
import EntryPage from "./components/register/register";
function App() {
  return EntryPage;
}

export default App;
