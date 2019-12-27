import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { hot } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import App from "./src/App";
import "./reset.css";

ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

export default hot(module)(App);
