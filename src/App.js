import React from 'react';
import { Route, Switch } from "react-router-dom";
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';

const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>

    <Route exact path="/" component={ProductList}/>
    <Route exact path="/cart" component={Cart}/>

    </Switch>
    </>
  );
};

export default App;