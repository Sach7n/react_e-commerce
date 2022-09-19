import React from 'react';
import { Route, Switch,BrowserRouter as Router  } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Cart from '../src/Pages/Cart';
import ProductList from '../src/Pages/ProductList';
import Navigation from "./Components/Navigation"
import SignUp from './Pages/SignUp';

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Container>
        <main className='py-3'>
          
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/cart" component={Cart} />

          </Switch>
        </main>
      </Container>
    </Router>
  );
};

export default App;