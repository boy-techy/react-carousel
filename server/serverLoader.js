import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Helmet from 'react-helmet';
import { StaticRouter, matchPath } from "react-router-dom";
import { Provider } from "react-redux";

// import our main App component
import App from '../src/app';
import store from "../src/store/createStore";
import { routes } from "../src/routes";

const path = require("path");
const fs = require("fs");
const injectHTML = require("./utility").injectHTML;


const generatePrerequisite = async req => {
    for (const route of routes) {
        const match = matchPath(req.url, route);
        if (match) {
            try {
                return await route.loadData();
            } catch (e) {
                console.log("\x1b[41m", `Error while loading prerequisite data ${e}`, "\x1b[40m");
                return e
            }
        }
    }
};


export default (req, res, next) => {
    const context = {};
    
    // point to the html file created build tool
    const filePath = path.resolve(__dirname, '../dist/index.html');
    
    //match Route and generate required Data before actual Rendering
    generatePrerequisite(req)
      .then(() => {
          
          fs.readFile(filePath, 'utf8', (err, htmlData) => {
              if (err) {
                  console.error('err', err);
                  return res.status(404).end()
              }
              
              // render the app as a string
              const view = ReactDOMServer.renderToString(
                <Provider store={store}>
                    <StaticRouter location={req.url} context={context}>
                        <App/>
                    </StaticRouter>
                </Provider>
              );
              
              // inject the rendered app into our html and send it
              if (context.url) {
                  res.writeHead(301, {
                      Location: context.url
                  });
                  res.end();
              } else {
                  // We need to tell Helmet to compute the right meta tags, title, and such
                  const helmet = Helmet.renderStatic();
                  
                  const html = injectHTML(htmlData, {
                      html: helmet.htmlAttributes.toString(),
                      title: helmet.title.toString(),
                      meta: helmet.meta.toString(),
                      link: helmet.link.toString(),
                      body: view,
                      scripts: [],
                      state: JSON.stringify(store.getState()).replace(/</g, '\\u003c'),
                  });
                  return res.send(html);
              }
          });
      })
      .catch(e => {
          res.send("err0r page");
      });
}
