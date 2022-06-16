import React from "react";
import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";

import Footer from "./components/Footer";
import Login from "./components/buttons/Login";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/Login" component={Login} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
