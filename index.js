import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { hot } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from "./src/App";
import "./reset.css";
import store from "./src/store/createStore";
import { isServer } from "./src/services/util";

if (isServer()) {
    ReactDOM.hydrate(
      <Provider store={store}>
          <BrowserRouter>
              <App/>
          </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
} else {
    ReactDOM.render(
      <Provider store={store}>
          <BrowserRouter>
              <App/>
          </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
}

export default hot(module)(App);
