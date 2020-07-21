import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Nav from "./component/Nav/Nav";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Jeu from "./pages/jeu/Jeu";
import "./App.scss";
import "./global/global.scss";

const App = ({ location }) => {
  return (
    <div>
      <Nav />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames={"slide"} timeout={1000}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/jeu" component={Jeu} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default withRouter(App);
