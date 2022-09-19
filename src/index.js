import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import Consumer from "./Context"
import "./index.css";

ReactDOM.render(
  <Consumer>
    <Router>
      <App />
    </Router>
  </Consumer>,
  document.getElementById('root')
);