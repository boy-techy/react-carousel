import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { Header, Footer } from "./components/common";
import createStore from "./store/createStore";
import HomePage from "./components/view/HomePage";

const store = createStore();

export default class App extends Component {
    
    render() {
        return (
          <Provider store={store}>
              <div>
                  <Header/>
                  <BrowserRouter>
                      <Switch>
                          <Route to="/pdp/:id" component={() => <div>Product Detail</div>}/>
                          <Route exact to="/" component={HomePage}/>
                      </Switch>
                  </BrowserRouter>
                  <Footer/>
              </div>
          </Provider>
        )
    }
}
