import React from 'react';
import { hot } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import App from "./src/App";
import "./reset.css";

ReactDOM.render(<App/>,
  document.getElementById('root')
);

export default hot(module)(App);
