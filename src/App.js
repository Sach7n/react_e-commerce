import React from 'react';
import { Route, Switch } from "react-router-dom";
import Cart from './Components/Cart';
import ProductList from './Components/ProductList';
import "./App.css";
import MainNavigation from "./Components/Navigation/MainNavigation"
import SignUp from './Components/SignUp';

const App = () => {
  return (
    <div className='main_app'>
    <MainNavigation/>
    <Switch>

    <Route exact path="/" component={ProductList}/>
    <Route exact path="/signup" component={SignUp}/>
    <Route exact path="/cart" component={Cart}/>

    </Switch>
    </div>
  );
};

export default App;