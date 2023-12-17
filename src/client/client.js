// Startup point for client side application
import "babel-polyfill"  // for supporting async js for proper bundling
import 'regenerator-runtime/runtime' // supporting babel-polyfill
import React from "react";
import ReactDom from "react-dom";
import Routes from "./routes";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reducers from "./reducers";
import { renderRoutes } from 'react-router-config'; 
 
const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDom.hydrate(
    <Provider store={store}>
       <BrowserRouter>
          {renderRoutes(Routes)}
       </BrowserRouter>
    </Provider>
    , document.getElementById("root"));