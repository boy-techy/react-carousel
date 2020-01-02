import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { hot } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from "./src/App";
import "./reset.css";
import store from "./src/store/createStore";

const ROOT_NODE = document.getElementById('root');
const domFunction = ROOT_NODE.childNodes.length ? 'hydrate' : 'render';

ReactDOM[domFunction](
  <Provider store={store}>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </Provider>,
  ROOT_NODE
);


export default hot(module)(App);
