import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Routes from './router';
import Login from '../src/components/login/login';
import Dashboard from '../src/components/dashboard/dashboard.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'this is the App master chnage_67',
      test_3: 'test_3',
      title1: 'this is the App master title1',
      t: 't',
    };
  }

  render() {
    return <Routes></Routes>;
  }
}

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
