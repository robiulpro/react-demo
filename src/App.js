import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './shared-components/header';
import ParentWrapper from './parent-components/parent-wrapper';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/">
        <ParentWrapper />
      </Route>
    </Router>
  );
}

export default App;
