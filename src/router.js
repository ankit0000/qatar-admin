import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Login from '../src/components/login/login';
import Dashboard from '../src/components/dashboard/dashboard.js';
const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/dashboard',
    component: Dashboard
  }
];

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
