import "normalize.css";
import "./App.css";
import background from "./images/bg.jpg";
import Header from "./components/header/header";
function App() {
  return (
    <div className="App">
      <Header />
      <img src={background} alt="home background" className="background"></img>
    </div>
  );
}

export default App;
