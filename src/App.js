import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { Header, Footer } from "./components/common";
import createStore from "./store/createStore";
import HomePage from "./components/view/homePage/HomePage";
import ProductDetail from "./components/view/productDetail";

const store = createStore();

export default class App extends Component {
    
    render() {
        return (
          <Provider store={store}>
              <Header/>
              <Switch>
                  <Route path={`/pdp/:id`} component={ProductDetail}/>
                  <Route exact path={"/"} component={HomePage}/>
              </Switch>
              <Footer/>
          </Provider>
        )
    }
}
