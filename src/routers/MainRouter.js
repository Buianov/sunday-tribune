import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../store';

import Article from '../components/article';
import HomePage from '../components/homepage';
import NotFound from '../components/notfound';
import Header from '../components/header';

const MainRouter = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/article/:id?" component={Article} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
