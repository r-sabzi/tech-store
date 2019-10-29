import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route,Switch} from 'react-router-dom'
import "./App.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage"
import Default from "./pages/DefaultPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </>)
}

export default App;
