import React from 'react';
import { Route, Switch } from "react-router-dom";
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import "./App.css";

const App = () => {
  return (
    <div>
    <Navbar/>
    <Switch>

    <Route exact path="/" component={ProductList}/>
    <Route exact path="/cart" component={Cart}/>

    </Switch>
    </div>
  );
};

export default App;