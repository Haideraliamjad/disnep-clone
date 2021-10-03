import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/details">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
