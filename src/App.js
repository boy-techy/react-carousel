import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Header, Footer } from "./components/common";
import { routes } from "./routes";
import HelmetWrapper from "./components/common/HelmetWrapper";


export default class App extends Component {
    
    render() {
        return (
          <HelmetWrapper>
              <Header/>
              <Switch>
                  {
                      routes.map((route, index) => {
                          return <Route key={index}
                                        path={route.path}
                                        component={route.component}
                                        exact={route.exact}
                          />
                      })
                  }
              
              </Switch>
              <Footer/>
          </HelmetWrapper>
        )
    }
}
