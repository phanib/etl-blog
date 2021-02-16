import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Spaces from "./Containers/Spaces";
import Blog from "./Containers/Blog";
import BlogPost from "./Containers/BlogPost";
import LoginContainer from "./Containers/Login";
import CreateStory from "./Containers/CreateStory";
import SignupContainer from "./Containers/Signup";
import CreateSpace from "./Containers/CreateSpace";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const Router = () => {
  return (
    <HashRouter history={history}>
      <Switch>
        <Route exact path="/" component={Spaces} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/story/create/:space" component={CreateStory} />
        <Route exact path="/space/create" component={CreateSpace} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/space/:id" component={Blog} />
        <Route exact path="/story/:title/:id" component={BlogPost} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
