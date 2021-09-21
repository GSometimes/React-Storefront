import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import NavBar from "./component/NavBar";
import Cart from "./component/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
        </Switch>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
