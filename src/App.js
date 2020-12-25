import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Children from "./components/Children/Children";
import Home from "./components/Home/Home";
import ProductItem from "./components/Product/ProductItem";

function Error() {
  return <h2>404 Error. Page not found</h2>;
}

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/shoe-store">
            <Home />
          </Route>
          <Route exact path="/men">
            <Men />
          </Route>
          <Route path="/men/:id">
            <ProductItem />
          </Route>
          <Route exact path="/women">
            <Women />
          </Route>
          <Route path="/women/:id">
            <ProductItem />
          </Route>
          <Route exact path="/children">
            <Children />
          </Route>
          <Route path="/children/:id">
            <ProductItem />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
