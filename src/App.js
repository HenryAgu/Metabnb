// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Adventure from "./components/Adventure";

// React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Hero/>
              <Adventure/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
