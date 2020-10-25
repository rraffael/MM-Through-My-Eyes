import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import MarketingPage from "views/MarketingPage/MarketingPage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import ReportPage from "views/ReportPage/ReportPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/marketing-contents" component={MarketingPage} />
      <Route path="/report" component={ReportPage} />
      <Route path="/product" component={ProductPage} />
      <Route path="/component-page" component={Components} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
